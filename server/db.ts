import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@shared/schema';

let _queryClient: ReturnType<typeof postgres> | null = null;
let _db: ReturnType<typeof drizzle> | null = null;

function initDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL, PGHOST, PGUSER, PGPASSWORD, PGDATABASE, and PGPORT must be set");
  }
  if (!_queryClient) {
    _queryClient = postgres(process.env.DATABASE_URL);
    _db = drizzle(_queryClient, { schema });
  }
  return { queryClient: _queryClient, db: _db };
}

export const queryClient = new Proxy({} as ReturnType<typeof postgres>, {
  get(_target, prop) {
    const { queryClient } = initDb();
    const value = queryClient[prop as keyof ReturnType<typeof postgres>];
    return typeof value === 'function' ? value.bind(queryClient) : value;
  }
});

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    const { db } = initDb();
    const value = db[prop as keyof ReturnType<typeof drizzle>];
    return typeof value === 'function' ? value.bind(db) : value;
  }
});
