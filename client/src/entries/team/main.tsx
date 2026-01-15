import React from 'react'
import ReactDOM from 'react-dom/client'
import Team from '@/pages/Team'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Team />
    </Providers>
  </React.StrictMode>,
)
