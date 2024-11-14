import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Page/Home'
import { Header } from './Component/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Home /> <Header />
  </StrictMode>,
)
