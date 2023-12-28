import Database from 'tauri-plugin-sql-api'
import { Client } from '../types/client'

export const getClientsService = async () => {
  try {
    const dbPath = 'sqlite:test.db'

    const query = 'SELECT * FROM clients'

    const db = await Database.load(dbPath)
    console.log(db)

    const result: Client[] = await db.select(query)

    return result
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
