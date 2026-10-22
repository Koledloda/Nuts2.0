import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { prisma } from './lib/prisma';
import { ordersRouter } from './src/routes/orders';


const app = express();
app.use(express.json());
const port = Number(process.env.PORT) || 3000;

app.use(cors({
  origin: /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
  methods: ['GET', 'POST', 'OPTIONS'],

  allowedHeaders: ['Content-Type']
}));

app.use('/api/orders', ordersRouter);

app.get('/', (_req: any, res: any) => {
  res.json({ name: 'Nuts shop API', status: 'ok' });
});

app.get('/api/categories', async (_req: any, res: any) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: 'asc' },
      include: { _count: { select: { products: true } } },
    });
    res.json({ data: categories });
  } catch (error) {
    console.error('Failed to load categories:', error);
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Не удалось загрузить категории.' } });
  }
});

app.get('/api/products', async (req: any, res: any) => {
  const categorySlug = typeof req.query.category === 'string' ? req.query.category : undefined;
  const parsedLimit = Number(req.query.limit);
  const limit =
  Number.isInteger(parsedLimit) && parsedLimit > 0
    ? Math.min(parsedLimit, 100)
    : 100;

  try {
    const products = await prisma.product.findMany({
      where: categorySlug ? { category: { slug: categorySlug } } : undefined,
      orderBy: { id: 'asc' },
      take: limit,
      include: {
        category: true,
        images: { orderBy: { position: 'asc' } },
      },
    });

    res.json({ data: products, count: products.length });
  } catch (error) {
    console.error('Failed to load products:', error);
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Не удалось загрузить товары.' } });
  }
});


app.get('/api/products/:slug', async (req: any, res: any) => {
  const { slug } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        images: { orderBy: { position: 'asc' } },
      },
    });

    if (!product) {
      return res.status(404).json({ error: { code: 'PRODUCT_NOT_FOUND', message: 'Товар не найден.' } });
    }

    res.json({ data: product });
  } catch (error) {
    console.error('Failed to load product:', error);
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Не удалось загрузить товар.' } });
  }
});


app.listen(port, () => {
  console.log(`Сервер: http://localhost:${port}`);
});