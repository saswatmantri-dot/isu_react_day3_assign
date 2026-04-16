import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Day3App from './Day3App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day3App />
  </StrictMode>,
)
