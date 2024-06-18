import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { getCurrentUser } = require('../api/authApi');

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.error('Une erreur est survenue pour la connexion de l\'utilisateur :', error);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };
    fetchCurrentUser();
  }, [navigate]);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};