import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <Toaster/>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
)
