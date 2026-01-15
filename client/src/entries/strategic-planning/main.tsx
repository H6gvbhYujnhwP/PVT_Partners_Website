import React from 'react'
import ReactDOM from 'react-dom/client'
import StrategicPlanning from '@/pages/StrategicPlanning'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <StrategicPlanning />
    </Providers>
  </React.StrictMode>,
)
