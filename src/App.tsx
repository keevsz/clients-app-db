import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import { AuthGuard } from './guards/AuthGuard'
import AppRoutes from './pages/App/AppRoutes'

export default function App() {
  const views = [
    {
      name: 'login',
      path: '/login',
      component: LoginPage,
    },
  ]

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/app'} />} />
      <Route element={<AuthGuard isPrivateRoute={false} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<AuthGuard isPrivateRoute={true} />}>
        <Route path="/app/*" element={<AppRoutes />} key=""></Route>
      </Route>
    </Routes>
  )
}
