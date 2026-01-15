import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from '@/pages/ComingSoon'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <ComingSoon />
    </Providers>
  </React.StrictMode>,
)
