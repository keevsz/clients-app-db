import { Route, Routes } from 'react-router-dom'
import ClientPage from './Clients/ClientPage'
import HomePage from './HomePage'

export default function AppRoutes() {
  const views = [
    {
      name: 'clients',
      path: '/clients',
      component: ClientPage,
    },
    {
      name: 'app',
      path: '/',
      component: HomePage,
    },
  ]
  return (
    <Routes>
      {views.map((view) => (
        <Route key={view.name} path={view.path} element={<view.component />} />
      ))}
    </Routes>
  )
}
