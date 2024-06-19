import React, {Suspense, lazy} from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const SignUp = lazy(() => import("./components/auth/signUp/SignUp"));
const Login = lazy(() => import("./components/auth/login/Login"));
const Profile = lazy(() => import("./pages/profile/profile"));
const App = lazy(() => import("./App"));
const ErrorPage = lazy(() => import("./components/Error/ErrorPage/ErrorPage"));
const Loader = lazy(() => import("./components/loader/Laoder"));

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: 
        <Suspense fallback={<Loader/>} >
          <Home />
        </Suspense>
      },
      {
        path: "/signup",
        element: 
        <Suspense fallback={<Loader/>} >
        <SignUp />,
        </Suspense>
      },
      {
        path: "/login",
        element: 
        <Suspense fallback={<Loader/>} >
        <Login />,
        </Suspense>
      },
      {
        path: "/profile",
        element: 
        <Suspense fallback={<Loader/>} >
        <Profile />,
        </Suspense>
      },
    ]
  },

 
]);

export default router;