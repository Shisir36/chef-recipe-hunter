import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog";
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