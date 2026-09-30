import { z } from 'zod';

export const createUserSchema = z.object({
  name:  z.string().min(2).max(50),
});

export const validateBody = (schema: any) =>
  (req: any, res: any, next: any) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues.map((i: any) => ({
        path: i.path.join('.'),
        message: i.message
      }))
    });
  }
  req.body = result.data;
  next();
};
