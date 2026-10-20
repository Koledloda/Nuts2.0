import { z } from 'zod';

const phoneField = z
  .string()
  .regex(/^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/, 'Формат: 8(XXX)XXX-XX-XX');

  export const checkoutSchema = z.object({
  phone: phoneField,
  email: z.string().email('Некорректный email'),
  personalDataConsent: z
    .boolean()
    .refine((value) => value, 'Необходимо согласие на обработку персональных данных'),
  marketingConsent: z.boolean().default(false),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;