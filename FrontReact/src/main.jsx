import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CardApp } from './CardApp.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardApp />
    </BrowserRouter>
  </React.StrictMode>,
)
