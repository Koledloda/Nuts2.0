import { Router, type Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../lib/prisma';
import { loginSchema, type LoginInput } from '../../shared/schema';
import {
  validateMiddleware,
  type TypedRequest,
} from '../middleware/validate';

export const authRouter = Router();

authRouter.post(
  '/login',
  validateMiddleware(loginSchema),
  async (req: TypedRequest<LoginInput>, res: Response): Promise<void> => {
    const { login, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { login },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ error: 'Неверный логин или пароль' });
        return;
      }

      if (user.role !== 'ADMIN') {
        res.status(403).json({ error: 'Доступ запрещён' });
        return;
      }

      const secret = process.env.JWT_SECRET;

      if (!secret) {
        res.status(500).json({ error: 'Ошибка настройки сервера' });
        return;
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        secret,
        { expiresIn: '1h' }
      );

      res.json({ token });
    } catch (error) {
      console.error('Ошибка входа:', error);
      res.status(500).json({ error: 'Не удалось выполнить вход' });
    }
  }
);