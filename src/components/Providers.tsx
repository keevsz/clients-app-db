import { BrowserRouter } from 'react-router-dom'

export default function Providers({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  )
}
