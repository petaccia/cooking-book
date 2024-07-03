// router.jsx

// Bibliothèques
import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from "./components/security/ProtectedRoute";

// Pages
const App = lazy(() => import("./App"));
const ErrorPage = lazy(() => import("./components/Error/ErrorPage/ErrorPage"));
const SignUpPage = lazy(() => import("./pages/auth/SignUpPage/SignUpPage")); 
const LoginPage = lazy(() => import("./pages/auth/LoginPage/LoginPage")); 
const Home = lazy(() => import("./pages/home/Home"));
const Profile = lazy(() => import("./pages/user/pages/profile/pages/Profile"));
const MyBookCook = lazy(() => import("./pages/user/pages/myCookBook/MyBookCook")); 
const RecipePage = lazy(() => import("./pages/Recipe/pages/RecipePage"));

// Components
const Loader = lazy(() => import("./components/loader/Loader"));

const AppWrapper = () => (
  <UserProvider>
    <App />
    <ToastContainer theme="dark" autoClose={5000} position='bottom-right' />
  </UserProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppWrapper />
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
        path: "signup",
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
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "profile/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: "myBookCook/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <MyBookCook />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "recipe/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <RecipePage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
