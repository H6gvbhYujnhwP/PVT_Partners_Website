import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from '@/pages/Contact'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Contact />
    </Providers>
  </React.StrictMode>,
)
