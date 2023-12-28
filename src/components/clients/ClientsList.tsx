import { useEffect, useState } from 'react'
import { getClientsService } from '../../services/clients.service'
import { Client } from '../../types/client'

export default function ClientsList() {
  const [data, setData] = useState<Client[]>([])

  const getClients = async () => {
    const clients = await getClientsService()
    setData(clients || [])
  }

  useEffect(() => {
    getClients()
  }, [])

  return (
    <div>
      ClientsList
      {data.map((data: any, index: number) => {
        return <div key={index}>{data.name}</div>
      })}
    </div>
  )
}
