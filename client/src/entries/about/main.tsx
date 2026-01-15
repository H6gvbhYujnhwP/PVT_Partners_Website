import React from 'react'
import ReactDOM from 'react-dom/client'
import About from '@/pages/About'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <About />
    </Providers>
  </React.StrictMode>,
)
