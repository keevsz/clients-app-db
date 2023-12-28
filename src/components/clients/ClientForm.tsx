import { useState } from 'react'
import Database from 'tauri-plugin-sql-api'

export default function ClientForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const dbPath = 'sqlite:test.db'
      const db = await Database.load(dbPath)
      await db.execute('INSERT INTO clients (name, email) VALUES (?, ?)', [
        name,
        email,
      ])

      setName('')
      setEmail('')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="text-black"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          className="text-black"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <button type="submit">Add Client</button>
    </form>
  )
}
