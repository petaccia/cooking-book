// UserContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { loginUser, getCurrentUser, logoutUser } from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log('Utilisateur actuel :', user);

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
      console.log('Reponse du serveur pour la connexion dans le context :', response);
      setUser(response);
      return response; 
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw error;
    }
  };
  const logout = async () => {
    try{
      const response = await logoutUser();
      console.log('Reponse du serveur pour la deconnexion dans le context :', response);
      setUser(null);
    } catch (error) {
      console.error('Erreur lors de la deconnexion :', error);
      throw error;
    }
  };
   

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
