import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import SignUpPage from './routes/sign-up'
import Login from './routes/Login'
import Home from './routes/Home'
import Bookmark from './routes/Bookmark'
import Dashboard from './routes/Dashboard'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/sign-in/*', element: <Login /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: '/',
        children: [
          { path: '/', element: <Home /> },
          { path: '/bookmark', element: <Bookmark /> },
          { path: '/dashboard', element: <Dashboard /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)