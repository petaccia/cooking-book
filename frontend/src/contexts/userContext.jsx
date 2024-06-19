// UserContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { Loader } from '../loader';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { user } = await Loader();
        setUser(user);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur actuel :', error);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials.email, credentials.password);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
