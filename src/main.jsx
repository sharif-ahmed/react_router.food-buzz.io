/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import NotFound from './components/NotFound/NotFound.jsx'
import Categories from './components/Categories/Categories.jsx'
import Meals from './components/Meals/Meals.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const categoriesData = await categoriesResponse.json();

          const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
          const mealsData = await mealsResponse.json();

          return { categoriesData, mealsData };
        },
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
