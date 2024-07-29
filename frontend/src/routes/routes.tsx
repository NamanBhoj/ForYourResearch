import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/SignUp";
import Login from "../pages/Login"
import Home from "../pages/Home";
import React from "react";

const routes = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/signup", element: <Signup></Signup> },
    { path: "/login", element: <Login></Login> }
])


export default routes; 
