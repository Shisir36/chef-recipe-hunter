import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import Login from "../Components/Login";
import ChefRecipes from "../Components/Pages/ChefRecipes/ChefRecipes";
export const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path:"/ChefRecipes/:id",
            element:<ChefRecipes/>,
            loader:({params})=> fetch(`http://localhost:5000/recipes/${params.id}`)
        }
    ]
    }
])