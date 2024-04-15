import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


export const API_URL =  "https://65a8fe35219bfa3718681fe6.mockapi.io/react-axios-task";

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
  
  <RouterProvider router={router}/>
    
  </>
}

export default App