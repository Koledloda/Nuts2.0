import express from 'express';
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
