// src/Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';
import ProtectedRoute from './components/security/ProtectedRoute';
import ErrorPage from './components/Error/ErrorPage/ErrorPage';
import ErrorBoundary from './components/Error/errorBoundary/ErrorBoundary';

import Home from './pages/home/Home';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import User from './pages/user/User';
import Profile from './pages/user/pages/profile/pages/Profile';
import RecipePage from './pages/recipePage/RecipePage';
import CreateRecipe from './pages/user/pages/CreateRecipe/CreateRecipe';
import MyCookBook from './pages/user/pages/myCookBook/MyBookCook';

const Router = () => {
  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Navbar />
      <ToastContainer position='bottom-right' autoClose={3000}  theme="dark" hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="recipe/:id" element={<RecipePage />} />

          <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>}>
            <Route path="profile/:id" element={<Profile />} />
            <Route path="create-recipe" element={<CreateRecipe />} />
            <Route path="my-cookbook/:id" element={<MyCookBook />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;