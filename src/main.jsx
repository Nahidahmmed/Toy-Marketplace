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
import AuthProvider from './Providers/AuthProvider';
import AddTeddy from './pages/AddTeddy/AddTeddy';
import MyTeddy from './pages/Home/MyTeddys/MyTeddy';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrPage></ErrPage>,
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
        path: "/addTeddy",
        element: <PrivateRoute><AddTeddy></AddTeddy></PrivateRoute>
      },
      {
        path: "/myTeddy",
        element: <PrivateRoute><MyTeddy></MyTeddy></PrivateRoute>
      },
      {
        path: '/detail/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-self.vercel.app/teddy/${params.id}`)
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
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </AuthProvider>
  </NextUIProvider>
)
