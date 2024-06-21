// router.jsx


// bibliotheque react
import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';


// pages
const Home = lazy(() => import("./pages/home/Home"));
const SignUpPage = lazy(() => import("./pages/auth/SignUpPage/SignUpPage")); 
const LoginPage = lazy(() => import("./pages/auth/LoginPage/LoginPage")); 
const Profile = lazy(() => import("./pages/user/pages/profile/pages/Profile"));
const App = lazy(() => import("./App"));
const ErrorPage = lazy(() => import("./components/Error/ErrorPage/ErrorPage"));
const Loader = lazy(() => import("./components/loader/Loader"));

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
            <SignUpPage />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "user",
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
            children: [
              {
                path: ":id",
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
    ],
  },
]);

export default router;
