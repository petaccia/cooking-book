import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import ErrorBoundary from './components/Error/errorBoundary/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
