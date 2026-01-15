import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '@/pages/Home'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Home />
    </Providers>
  </React.StrictMode>,
)
