import 'dotenv/config';
import { PrismaClient } from '../generated/prisma-client/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
});

const prisma = new PrismaClient({ adapter });

const categories = [
  { slug: 'seeds', title: 'Семена' },
  { slug: 'snacks', title: 'Перекусы' },
  { slug: 'nuts', title: 'Орехи' },
  { slug: 'exotic', title: 'Экзотика' },
];

const products = [
  {
    id: 1,
    categorySlug: 'seeds',
    image: 'https://415022.lp.tobiz.net/img/400x400/cd61617b45acfe7e66d13b9646d8693e.jpg',
    title: 'Семена конопли',
    description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
    price: '1 040.00 руб.',
  },
  {
    id: 2,
    categorySlug: 'snacks',
    image: 'https://415022.lp.tobiz.net/img/400x400/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
    title: 'Кокосовые чипсы',
    description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
    price: '899.00 руб.',
  },
  {
    id: 3,
    categorySlug: 'nuts',
    image: 'https://415022.lp.tobiz.net/img/400x400/c1bb60bff94721d00526ea75431f6a30.jpg',
    title: 'Макадамия',
    description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
    price: '630.00 руб.',
  },
  {
    id: 4,
    categorySlug: 'exotic',
    image: 'https://415022.lp.tobiz.net/img/400x400/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
    title: 'Бразильский орех',
    description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
    price: '790.00 руб.',
  },
    {
    id: 5,
    categorySlug: 'exotic',
    image: 'https://415022.lp.tobiz.net/img/400x400/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
    title: 'Бразильский орех',
    description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
    price: '790.00 руб.',
  }
];

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { title: category.title },
      create: category,
    });
  }

  for (const product of products) {
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: product.categorySlug },
    });

    const data = {
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      categoryId: category.id,
    };

    await prisma.product.upsert({
      where: { id: product.id },
      update: data,
      create: { id: product.id, ...data },
    });
  }

  console.log(`Seed complete: ${products.length} products.`);
}

main()
  .catch((error: unknown) => {
    console.error('Seed failed:', error);
    throw error;
  })
  .finally(() => prisma.$disconnect());