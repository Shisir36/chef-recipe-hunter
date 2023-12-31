import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import ChefRecipes from "../Components/Pages/ChefRecipes/ChefRecipes";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Errorpage from "../Errorpage/Errorpage";
export const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      errorElement:<Errorpage></Errorpage>,
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
            path: '/register',
            element: <Register/>
        },
        {
            path:"/ChefRecipes/:id",
            element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
            loader:({params})=> fetch(`https://chef-recipe-hunter-server-shisir36.vercel.app/recipes/${params.id}`)
        }
    ]
    }
])