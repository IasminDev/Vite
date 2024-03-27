import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './Home.jsx'
import { Consumo } from './Consumo.jsx'
import { Carousel } from './Carousel.jsx'
import { RickAndMorty } from './RickAndMorty.jsx'
import { InputMaskTest } from './InputMaskTest.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Consumo",
    element: <Consumo/>,
  },
  {
    path: "/Carousel",
    element: <Carousel/>,
  },
  {
    path: "/RickAndMorty",
    element: <RickAndMorty/>,
  },
  {
    path: "/inputMask",
    element: <InputMaskTest/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
