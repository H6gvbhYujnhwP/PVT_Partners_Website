import React from 'react'
import ReactDOM from 'react-dom/client'
import Video from '@/pages/Video'
import Providers from '@/components/Providers'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Video />
    </Providers>
  </React.StrictMode>,
)
