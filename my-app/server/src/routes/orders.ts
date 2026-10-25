import { Router, type Response } from 'express';
import { prisma } from '../../lib/prisma';
import {
  checkoutSchema,
  updateOrderStatusSchema,
  type CheckoutInput,
} from '../../shared/schema';
import {
  validateMiddleware,
  type TypedRequest,
} from '../middleware/validate';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

export const ordersRouter = Router();

// Создание заказа
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


ordersRouter.get('/', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json({ data: orders });
  } catch (error) {
    console.error('Ошибка получения заказов:', error);
    res.status(500).json({ error: 'Не удалось загрузить заказы' });
  }
});


ordersRouter.patch(
  '/:id/status',
  authMiddleware,
  adminMiddleware,
  validateMiddleware(updateOrderStatusSchema),
  async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0 || id > 2147483647) {
      res.status(400).json({ error: 'Некорректный ID заказа' });
      return;
    }

    try {
      const result = await prisma.order.updateMany({
        where: { id },
        data: { status: req.body.status },
      });

      if (result.count === 0) {
        res.status(404).json({ error: 'Заказ не найден' });
        return;
      }

      res.json({ data: { id, status: req.body.status } });
    } catch (error) {
      console.error('Ошибка изменения статуса:', error);
      res.status(500).json({ error: 'Не удалось изменить статус' });
    }
  }
);