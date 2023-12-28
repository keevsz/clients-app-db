import Database from 'tauri-plugin-sql-api'

const dbPath = 'sqlite:test.db'

async function initializeDatabase() {
  const db = await Database.load(dbPath)

  await db.execute(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

  return db
}

await initializeDatabase()
