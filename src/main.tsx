import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './config/db'
import Providers from './components/Providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)
