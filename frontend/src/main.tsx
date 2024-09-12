import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Pages import
import App from './App.tsx'
import Signup from './pages/sign-up/Signup'
import Login from './pages/login/Login'
import Welcome from './pages/welcome/Welcome'
import FacultyDashboard from './pages/facultyDashboard/FacultyDashboard.tsx'


// Library import
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path="" element={<Welcome/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='/facultydashboard' element={<FacultyDashboard/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
