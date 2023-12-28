import ClientForm from '../../../components/clients/ClientForm'
import ClientsList from '../../../components/clients/ClientsList'

export default function ClientPage() {
  return (
    <div className="h-screen bg-black text-white grid grid-cols-12">
      <div className="col-span-5">
        <ClientForm />
      </div>
      <div className="col-span-7">
        <ClientsList />
      </div>
    </div>
  )
}
