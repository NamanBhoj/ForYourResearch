import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from "../pages/SignUp";
import Login from "../pages/Login"
import Home from "../pages/Home";

const routes = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/signup", element: <Signup></Signup> },
    { path: "/login", element: <Login></Login> }
])


export default routes; 