import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
// import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <Toaster />
      <HelmetProvider>
        <RouterProvider router={Router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
