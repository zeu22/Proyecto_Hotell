import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/home/Home';
import ErrorPage from './pages/error-page/Error-Page';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "services",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "testimonials",
        element: <Home />,
        errorElement: <ErrorPage />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
