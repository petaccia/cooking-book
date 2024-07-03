import React, { createContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { loginUser, getCurrentUser, logoutUser } from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const { user } = await getCurrentUser();
      setUser(user);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'utilisateur actuel :', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = async (credentials) => {
    console.log('Connexion de l\'utilisateur :', credentials);
    try {
      const response = await loginUser(credentials.email, credentials.password);
      setUser(response); 
      return response;
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      if (user) {
        toast.success(`A bientôt ${user.pseudo} !`);
        localStorage.removeItem('hasShownWelcomeToast');
      }
      setUser(null);
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading, loadUser }}>
      {children}
    </UserContext.Provider>
  );
}