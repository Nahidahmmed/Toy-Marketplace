import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { NextUIProvider } from '@nextui-org/react';
import Blog from './pages/Blog/Blog';
import AllToys from './pages/AllToys/AllToys';
import Details from './pages/Details/Details';
import ErrPage from './pages/ErrPage/ErrPage';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrPage></ErrPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path:'/detail/:id',
        element:<Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/teddy/${params.id}`)
      },
      {
        path: "/shop",
        element: <p>hello</p>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </NextUIProvider>
)
