import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';

async function main() {
  const login = process.env.ADMIN_LOGIN;
  const password = process.env.ADMIN_PASSWORD;

  if (!login || !password || password.length < 12) {
    throw new Error('Задай ADMIN_LOGIN и ADMIN_PASSWORD минимум из 12 символов');
  }

  const existingUser = await prisma.user.findUnique({
    where: { login },
  });

  if (existingUser) {
    throw new Error('Пользователь с таким логином уже существует');
  }

  const hash = await bcrypt.hash(password, 12);

  await prisma.user.create({
    data: {
      login,
      password: hash,
      role: 'ADMIN',
    },
  });

  console.log('Администратор создан');
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());