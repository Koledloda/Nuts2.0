import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

type JWTPayload = {
  id: number;
  role: 'USER' | 'ADMIN';
};

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Требуется авторизация' });
    return;
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    res.status(500).json({ error: 'Ошибка настройки сервера' });
    return;
  }

  try {
    const payload = jwt.verify(header.slice(7), secret, {
      algorithms: ['HS256'],
    });

    if (
      typeof payload === 'string' ||
      !Number.isInteger(payload.id) ||
      (payload.role !== 'USER' && payload.role !== 'ADMIN')
    ) {
      res.status(401).json({ error: 'Некорректный токен' });
      return;
    }

    req.user = { id: payload.id, role: payload.role };
  } catch {
    res.status(401).json({ error: 'Недействительный токен' });
    return;
  }

  next();
};

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.user?.role !== 'ADMIN') {
    res.status(403).json({ error: 'Доступ запрещён' });
    return;
  }

  next();
};