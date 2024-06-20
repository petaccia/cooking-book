// router.jsx
import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const SignUp = lazy(() => import("./components/auth/signUp/SignUp"));
const Login = lazy(() => import("./components/auth/login/Login"));
const Profile = lazy(() => import("./pages/user/profile/Profile"));
const App = lazy(() => import("./App"));
const ErrorPage = lazy(() => import("./components/Error/ErrorPage/ErrorPage"));
const Loader = lazy(() => import("./components/loader/Loader"));
import { UserProvider } from './contexts/UserContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <UserProvider>
          <App />
        </UserProvider>
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={<Loader />}>
            <UserProvider>
              <Outlet />
            </UserProvider>
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
