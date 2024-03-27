import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


import { Home } from './Home.jsx';
import { Tech } from './Technologies.jsx';
import { Calc } from './Calculations.jsx';
import { Cont } from './Contact.jsx';
import { RaM } from './RickAndMorty.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Tech",
    element: <Tech/>,
  },
  {
    path: "/Calc",
    element: <Calc/>,
  },
  {
    path: "/Cont",
    element: <Cont/>,
  },
  {
    path: "/RaM",
    element: <RaM/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);