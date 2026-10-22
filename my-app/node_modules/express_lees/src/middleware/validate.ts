import type { Request, Response, NextFunction } from 'express';
import type { ZodType } from 'zod';

export type TypedRequest<T> = Request<{}, {}, T>;

export const validateMiddleware = <T>(schema: ZodType<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: 'Ошибка валидации',
        details: result.error.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        })),
      });
      return;
    }

    req.body = result.data;
    next();
  };