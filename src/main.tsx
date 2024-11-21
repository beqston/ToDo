import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

import SignUpPage from './routes/sign-up'
import Login from './routes/Login'
import Home from './routes/Home'
import Bookmark from './routes/Bookmark'
import Dashboard from './routes/Dashboard'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Search from './routes/Search'
import SearchTodoContextProvider from './context/SearchContext'

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
          { path: '/search/:text', element: <Search /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchTodoContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </SearchTodoContextProvider>
  </React.StrictMode>,
)