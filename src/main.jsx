import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Components/Root/Error.jsx';
import Home from './Components/Root/Home.jsx';
import About from './Components/Root/About.jsx';
import Event from './Components/Event.jsx';
import AddEvent from './Components/Root/AddEvent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/event',
        element: <Event></Event>
      },
      {
        path: '/addEvent',
        element: <AddEvent></AddEvent>
      },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
