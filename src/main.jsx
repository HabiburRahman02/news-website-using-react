import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import MainContent from './pages/Home/MainContent'
import Login from './pages/Login'
import AuthLayout from './layout/AuthLayout'
import Register from './pages/Register'
import AuthProvider from './Provider/AuthProvider'
import NewsDetails from './pages/Home/NewsDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/category/01'}></Navigate>,
      },
      {
        path: '/category/:id',
        element: <MainContent></MainContent>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: '/newsDetails/:id',
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: '',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
