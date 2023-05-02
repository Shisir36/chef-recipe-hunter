import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import Login from "../Components/Login";

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
        }]
    }
])