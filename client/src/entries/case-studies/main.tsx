import React from 'react'
import ReactDOM from 'react-dom/client'
import CaseStudies from '@/pages/CaseStudies'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <CaseStudies />
    </Providers>
  </React.StrictMode>,
)
