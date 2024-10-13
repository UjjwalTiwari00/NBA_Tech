import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { createBrowserRouter, Route ,RouterProvider} from 'react-router-dom'
import Career from './components/Career.jsx'
import {Gallery}  from './components/Gallery.jsx'
import Structure from './components/Structure.jsx'
import Qouta from './components/qouta.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"",
        element: <Structure />, 
      },
      {
        path: 'gallery',
        element: <Gallery />, 
      },
      {
        path: 'career',
        element: <Career />,  
      },
      {
        path: 'qouta',
        element: <Qouta />,  
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
