import { z } from 'zod';

const phoneField = z
  .string()
  .regex(/^\+7\d{10}$/, 'Формат: +79161234567');

  export const checkoutSchema = z.object({
    items: z
  .array(
    z.object({
      productId: z
        .number()
        .int('ID товара должен быть целым числом')
        .positive('Некорректный ID товара')
        .max(2147483647, 'Некорректный ID товара'),

      quantity: z
        .number()
        .int('Количество должно быть целым числом')
        .min(1, 'Минимальное количество — 1')
        .max(100, 'Максимальное количество — 100'),
    })
  )
  .min(1, 'Корзина не должна быть пустой')
  .max(100, 'В корзине не может быть больше 100 позиций'),
  phone: phoneField,
  email: z.string().email('Некорректный email'),
  personalDataConsent: z
    .boolean()
    .refine((value) => value, 'Необходимо согласие на обработку персональных данных'),
  marketingConsent: z.boolean().default(false),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;