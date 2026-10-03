/* import express from 'express';
import {userRouters} from './src/users/user.routers';
import { PrismaClient } from './generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db'
});

const prisma = new PrismaClient({ adapter });

const arr = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Alice'},
]

const app: any = express();
const PORT = 3000;

app.use((req: any, res: any, next: any) => {
  console.log(`${req.method} ${req.url}`);
  next(); // передать управление дальше
});

app.use(express.json());



app.get('/', (req: any, res: any) => {
  res.send('Привет, Express!');
});

app.get('/time', (req : any, res: any) => {
  res.send(new Date().toISOString());
});

app.get('/created', (req: any, res: any) => {
  res.set('X-Created-By', 'me');
  res.status(201).json({ ok: true });
});

app.get('/echo', (req: any, res: any) => {
  res.send(req.get('User-Agent'));
});

// // путь + параметры
// app.get('/users/:id', (req, res) => {
//   res.json({ id: req.params.id });
// });

// query: /search?q=Alice
app.get('/search', (req: any, res: any) => {
  const { q } = req.query;
  
  const test = arr.filter(el => el.name === q)
  
  res.json(test);
});


// app.use(express.urlencoded({ extended: true }));

app.post('/users', (req: any, res: any) => {
  console.log(1111, req.body);
  res.status(201).json({ ok: true });
});

app.use('/api/users', userRouters);
app.use('/api/cars', userRouters);


app.get('/api/test/users',
  async (req: any, res: any) => {
    const users = await
      prisma.user.findMany({
        include: { posts: true }
      });
    res.json(users);
});

app.post('/api/test/users', async (req:  any, res: any) => {
  const { name, email, posts } = req.body;
  
  try {
    const user = await prisma.user.create({
      data: { 
        name, 
        email,
        posts: posts ? { create: posts } : undefined
      },
      include: { posts: true }  // чтобы посты вернулись в ответе
    });
    res.status(201).json(user);
  } catch (e: any) {
    if (e.code === 'P2002') {
      return res.status(409).json({ error: 'Email уже занят' });
    }
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер: http://localhost:${PORT}`);
});
 */

import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { Database } from 'better-sqlite3';
import { PrismaClient } from './generated/prisma-client/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const DB_URL = process.env.DATABASE_URL || 'file:./prisma/dev.db';
const adapter = new PrismaBetterSqlite3({ url: DB_URL });
const prisma = new PrismaClient({ adapter });

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors({
  origin: /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\$/,
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Главная страница
app.get('/', (_req: any, res: any) => {
  res.json({ name: 'Nuts shop API', status: 'ok' });
});

// Получение категорий
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
  const limit = parsedLimit > 0 ? Math.min(parsedLimit, 100) : 100;

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

// Получение одного товара по slug
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