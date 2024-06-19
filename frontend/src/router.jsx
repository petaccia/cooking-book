import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./components/auth/signUp/SignUp";
import Login from "./components/auth/login/Login";
import Profile from "./pages/profile/profile";
import App from "./App";
import { Loader } from "./loader";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    loader: Loader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  },

 
]);

export default router;