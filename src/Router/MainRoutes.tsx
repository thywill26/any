import {createBrowserRouter} from "react-router-dom"
import SignupUser from "../pages/USER/SignupUser"
import SigninUser from "../pages/USER/SigninUser"
import SignupAdmin from "../pages/ADMIN/SignupAdmin"
import SigninAdmin from "../pages/ADMIN/SigninAdmin"
import LoginPage from "../pages/LoginPage"


export const MainRoute =createBrowserRouter([

    {
        path:"/signin",
        element:<SigninUser/>,
      
    },
    {
        path:"/signup",
        element:<SignupUser/>,
    },
    {
        path:"/signupad",
        element:<SignupAdmin/>,
    },
    {
        path:"/signinad",
        element:<SigninAdmin/>,
    },
    {
        path:"/home",
        element:<LoginPage/>,
    },

])