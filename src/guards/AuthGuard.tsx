import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPrivateRoute: boolean
}

const PrivateRoute = <Navigate replace to={'/'} />
const PublicRoute = <Navigate replace to={'/login'} />

export const AuthGuard = ({ isPrivateRoute }: Props) => {
  const isAuthenticated = false

  return isAuthenticated ? (
    isPrivateRoute ? (
      <Outlet />
    ) : (
      PrivateRoute
    )
  ) : isPrivateRoute ? (
    PublicRoute
  ) : (
    <Outlet />
  )
}
