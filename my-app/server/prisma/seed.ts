import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db' // Убедитесь, что путь правильный
});

const prisma = new PrismaClient({ adapter });


async function main() {
  const user = await
    prisma.user.create({
    data: {
      name: 'Анна',
      email: 'anna@example.com',
      posts: {
        create: [
          { title: 'Первый пост' },
          { title: 'Второй пост' }
        ]
      }
    }
  });
  console.log('Создан:', user.name);
}

main()
  .catch(e => console.error(e))
  .finally(() =>
    prisma.$disconnect());