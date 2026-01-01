import { Database } from '@sqlitecloud/drivers';

export async function getDatabase(): Promise<Database>  {
  const connStr = process.env.SQLITECLOUD_URL!;
  
  if (!connStr) {
    throw new Error('Missing SQLITECLOUD_URL in .env.local');
  }

  const db = new Database(connStr); 

  return db;
}
