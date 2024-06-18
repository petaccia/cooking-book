import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  const login = async (credentials) => {
    const user = await loginUser(credentials);
    setUser(user);
  };

  useEffect(() => {
    setUser(user);
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user,  login, logout }}>
      {children}
    </UserContext.Provider>
  );
};