import { Router, type Response } from 'express';
import { prisma } from '../../lib/prisma';
import {
  checkoutSchema,
  type CheckoutInput,
} from '../../shared/schema';
import {
  validateMiddleware,
  type TypedRequest,
} from '../middleware/validate';

export const ordersRouter = Router();

ordersRouter.post(
  '/',
  validateMiddleware(checkoutSchema),
  async (req: TypedRequest<CheckoutInput>, res: Response): Promise<void> => {
    const {
      phone,
      email,
      items,
      personalDataConsent,
      marketingConsent,
    } = req.body;

    try {
      const products = await prisma.product.findMany({
        where: {
          id: { in: items.map((item) => item.productId) },
        },
      });

      const orderItems = [];

      for (const item of items) {
        const product = products.find(
          (product) => product.id === item.productId
        );

        if (!product || !product.isAvailable) {
          res.status(400).json({
            error: `Товар ${item.productId} недоступен`,
          });
          return;
        }

        if (product.currency !== 'RUB') {
          res.status(400).json({
            error: 'Заказ поддерживает только товары в рублях',
          });
          return;
        }

        orderItems.push({
          productId: product.id,
          productTitle: product.title,
          quantity: item.quantity,
          unitPrice: product.price,
        });
      }

      const totalPrice = orderItems.reduce(
        (sum, item) => sum + item.unitPrice * item.quantity,
        0
      );

      if (
        !Number.isSafeInteger(totalPrice) ||
        totalPrice < 0 ||
        totalPrice > 2147483647
      ) {
        res.status(400).json({ error: 'Недопустимая сумма заказа' });
        return;
      }

      const order = await prisma.order.create({
        data: {
          phone,
          email,
          personalDataConsent,
          marketingConsent,
          totalPrice,
          currency: 'RUB',
          items: {
            create: orderItems,
          },
        },
        select: {
          id: true,
          totalPrice: true,
          currency: true,
        },
      });

      res.status(201).json({ data: order });
    } catch (error) {
      console.error('Ошибка создания заказа:', error);
      res.status(500).json({ error: 'Не удалось создать заказ' });
    }
  }
);
