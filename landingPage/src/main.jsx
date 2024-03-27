import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

import App from './App.jsx'
import { Profiles } from './Profiles.jsx';
import { Calculations } from './Calculations.jsx';
import { Tecnologies } from './Tecnologies.jsx'
import { Contact } from './Contact.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Profiles",
    element: <Profiles />,
  },
  {
    path: "/Calc",
    element: <Calculations />,
  },
  {
    path: "/Tec",
    element: <Tecnologies />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
