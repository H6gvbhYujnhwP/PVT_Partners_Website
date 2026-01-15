import React from 'react'
import ReactDOM from 'react-dom/client'
import Services from '@/pages/Services'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Services />
    </Providers>
  </React.StrictMode>,
)
