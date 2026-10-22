import 'dotenv/config';
import { defineConfig, env } from 'prisma/config'
import path from 'node:path';

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    seed: 'node ../node_modules/tsx/dist/cli.mjs prisma/seed.ts',
    
  },
  datasource: {
    url: env('DATABASE_URL'),
  }
});
