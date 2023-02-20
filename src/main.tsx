import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.scss'

import App from './App'
import Home from './routes/Home'
import Episodes from './routes/Episodes'
import Episode from './routes/Episode'
import About from './routes/About'
import Sign from './routes/Sign'
import Error404 from './routes/Error404'

const router = createBrowserRouter([
  {
    path: '/podcast',
    element: <App />,
    children: [
      {
        path: '/podcast',
        element: <Home />
      },
      {
        path: 'episodes',
        element: <Episodes />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'sign',
        element: <Sign />,
      },
      {
        path: 'episode/:id',
        element: <Episode />,
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
)
