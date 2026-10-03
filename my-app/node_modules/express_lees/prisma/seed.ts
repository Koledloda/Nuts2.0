import 'dotenv/config';
import { PrismaClient } from '../generated/prisma-client/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
});

const prisma = new PrismaClient({ adapter });

const categories = [
  { slug: 'popular', title: 'Популярные' },
  { slug: 'premium', title: 'Премиум' },
  { slug: 'useful', title: 'Полезные' },
  { slug: 'exotic', title: 'Экзотические' },
];

const products = [
  {
    slug: 'sunflower-seeds',
    categorySlug: 'popular',
    title: 'Семечки подсолнечника',
    description: 'Аппетитные золотистые ядрышки с приятным ароматом. Отлично подходят к пиву или как самостоятельный вкусный и полезный перекус.',
    price: 1499,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/600x600/0e3cab38d860aa4b36990410c484115b.jpg'],
  },
  {
    slug: 'raw-almonds',
    categorySlug: 'popular',
    title: 'Миндаль сырой',
    description: 'Хрустящие орешки с нежным сладковатым вкусом. Содержат витамин Е, полезны для кожи и сердца. Прекрасный вариант для перекуса.',
    price: 349,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/600x600/2fca8ef7c69e814a5b863e9aea1150b9.jpg'],
  },
  {
    slug: 'walnuts',
    categorySlug: 'popular',
    title: 'Грецкие орехи',
    description: 'Крупные ядра с насыщенным вкусом, богаты полезными жирами. Идеальны для десертов, выпечки и здоровых перекусов в течение дня.',
    price: 190,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/600x600/b4832320fc5f587bc2b7a79186bc22f9.jpg'],
  },
  {
    slug: 'premium-macadamia',
    categorySlug: 'premium',
    title: 'Орехи макадамия',
    description: 'Изысканное сочетание хрустящих орехов и гладкого шоколада. Роскошный десерт для настоящих гурманов и ценителей.',
    price: 430,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/d2a2e1f66879ae32334f4b1797402db2.jpg'],
  },
  {
    slug: 'pecans',
    categorySlug: 'premium',
    title: 'Орехи пекан',
    description: 'Маслянистые ядра с нежным вкусом, напоминающим грецкий орех. Отлично дополняют десерты, выпечку и сырные тарелки.',
    price: 399,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/c3046db11672212db375655137805c7a.jpg'],
  },
  {
    slug: 'salted-pistachios',
    categorySlug: 'premium',
    title: 'Фисташки солёные',
    description: 'Пикантные раскрывшиеся орешки с ярким вкусом. Содержат полезные жиры и белок, любимое лакомство для многих.',
    price: 249,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/4e80af4789da8103cc4a9ce57696547f.jpg'],
  },
  {
    slug: 'roasted-cashews',
    categorySlug: 'premium',
    title: 'Кешью обжаренные',
    description: 'Нежные маслянистые орехи с деликатным сладковатым вкусом. Богаты железом и цинком, хороши сами по себе и в блюдах.',
    price: 190,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/bc6280d5a7bf5267b720c7bb0e16bf3b.jpg'],
  },
  {
    slug: 'chia-seeds',
    categorySlug: 'useful',
    title: 'Чиа семена',
    description: 'Суперфуд с высоким содержанием антиоксидантов. Разбухают в жидкости, подходят для пудингов, смузи и выпечки.',
    price: 2190,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/e5093ee29d011d36ef795fb40e5067ea.jpg'],
  },
  {
    slug: 'pine-nuts',
    categorySlug: 'useful',
    title: 'Кедровые орехи',
    description: 'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами, идеальны для соусов, салатов и десертов.',
    price: 770,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/7c68bba29cd66c0a751b13f6e38b6706.jpg'],
  },
  {
    slug: 'flax-seeds',
    categorySlug: 'useful',
    title: 'Льняные семена',
    description: 'Крошечные, но очень полезные семена с высоким содержанием Омега-3. Добавляют в смузи, выпечку и йогурты.',
    price: 349,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/13048b8f4a11867aab0326eb8be77f3f.jpg'],
  },
  {
    slug: 'pumpkin-seeds',
    categorySlug: 'useful',
    title: 'Тыквенные семечки',
    description: 'Натуральный источник цинка и магния. Хрустящие, слегка сладковатые, хороши в салатах, кашах и как перекус.',
    price: 560,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/ef26b497c268b5ef107c8b4fc19018bb.jpg'],
  },
  {
    slug: 'hemp-seeds',
    categorySlug: 'exotic',
    title: 'Семена конопли',
    description: 'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
    price: 1040,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/cd61617b45acfe7e66d13b9646d8693e.jpg'],
  },
  {
    slug: 'coconut-chips',
    categorySlug: 'exotic',
    title: 'Кокосовые чипсы',
    description: 'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
    price: 899,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg'],
  },
  {
    slug: 'exotic-macadamia',
    categorySlug: 'exotic',
    title: 'Макадамия',
    description: 'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
    price: 630,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/c1bb60bff94721d00526ea75431f6a30.jpg'],
  },
  {
    slug: 'brazil-nuts',
    categorySlug: 'exotic',
    title: 'Бразильский орех',
    description: 'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
    price: 790,
    isAvailable: true,
    images: ['https://415022.lp.tobiz.net/img/800x800/8f1b3b2bc1f31a964f535fd68292f15a.jpg'],
  },
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
    const { categorySlug, images, ...productData } = product;

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        ...productData,
        category: { connect: { slug: categorySlug } },
        images: {
          deleteMany: {},
          create: images.map((url, position) => ({
            url,
            alt: product.title,
            position,
          })),
        },
      },
      create: {
        ...productData,
        category: { connect: { slug: categorySlug } },
        images: {
          create: images.map((url, position) => ({
            url,
            alt: product.title,
            position,
          })),
        },
      },
    });
  }

  console.log(`Seed complete: ${categories.length} categories, ${products.length} products.`);
}

main()
  .catch((error: unknown) => {
    console.error('Seed failed:', error);
    throw error;
  })
  .finally(() => prisma.$disconnect());

