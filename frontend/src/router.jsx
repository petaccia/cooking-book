// src/Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import LoginPage from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import User from './pages/user/User';
import RecipePage from './pages/recipePage/RecipePage';
import CreateRecipe from './pages/user/pages/CreateRecipe/CreateRecipe';
import MyCookBook from './pages/user/pages/myCookBook/MyBookCook';
import ErrorPage from './components/Error/ErrorPage/ErrorPage';
import ProtectedRoute from './components/security/ProtectedRoute';
import Profile from './pages/user/pages/profile/pages/Profile';
import Navbar from './components/navbar/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/*Routes protegées de l'utilisateur imbriquer*/}
          <Route path="/user" element={
            <ProtectedRoute> 
              <User /> 
            </ProtectedRoute>} 
          />
            <Route path="/user/profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/user/recipe/:id" element={<ProtectedRoute><RecipePage /></ProtectedRoute>} />
            <Route path="/user/create-recipe" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
            <Route path="/user/my-cookbook/:id" element={<ProtectedRoute><MyCookBook /></ProtectedRoute>} />
          
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;