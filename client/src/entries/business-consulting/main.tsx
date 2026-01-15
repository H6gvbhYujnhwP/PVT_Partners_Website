import React from 'react'
import ReactDOM from 'react-dom/client'
import BusinessConsulting from '@/pages/BusinessConsulting'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <BusinessConsulting />
    </Providers>
  </React.StrictMode>,
)
