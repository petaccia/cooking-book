import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Assurez-vous d'importer toast depuis react-toastify
import { loginUser, getCurrentUser, logoutUser } from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { user } = await getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur actuel :', error);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    console.log('Connexion de l\'utilisateur :', credentials);
    try {
      const response = await loginUser(credentials.email, credentials.password);
      setUser(response); // Met à jour l'utilisateur dans le contexte
      return response;
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser(); 
      toast.success(`A bientôt ${user.pseudo} !`); 
      setUser(null); 
      setIsLoggedOut(true); 
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      throw error;
    }
  };

  useEffect(() => {
    if (isLoggedOut && user) {
      setIsLoggedOut(false); 
    }
  }, [isLoggedOut, user]);

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedOut, setIsLoggedOut }}>
      {children}
    </UserContext.Provider>
  );
};
