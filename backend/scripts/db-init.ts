import {pool} from '../lib/db';

async function initializeDatabase() {
  const client = await pool.connect();
  try {
      const sql = `CREATE TABLE IF NOT EXISTS changelog (
        id SERIAL PRIMARY KEY,
        path TEXT NOT NULL,
        version TEXT NOT NULL,
        date TEXT NOT NULL,
        author TEXT NOT NULL
      );`;
      await client.query(sql);
      console.log("Database initialized successfully.");
  } catch (err) {
      console.error("Failed to initialize database:", err);
  } finally {
      client.release();
  }
}

initializeDatabase().catch((err) => {console.error("Failed to initialize database:", err);})