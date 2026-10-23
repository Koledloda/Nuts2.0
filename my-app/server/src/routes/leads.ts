import { Router, type Response } from 'express';
import { prisma } from '../../lib/prisma';
import { leadSchema, type LeadInput } from '../../shared/schema';
import {
  validateMiddleware,
  type TypedRequest,
} from '../middleware/validate';

export const leadsRouter = Router();

leadsRouter.post(
  '/',
  validateMiddleware(leadSchema),
  async (req: TypedRequest<LeadInput>, res: Response): Promise<void> => {
    try {
      const lead = await prisma.lead.create({
        data: req.body,
        select: { id: true },
      });

      res.status(201).json({ data: lead });
    } catch (error) {
      console.error('Ошибка сохранения заявки:', error);
      res.status(500).json({ error: 'Не удалось сохранить заявку' });
    }
  }
);