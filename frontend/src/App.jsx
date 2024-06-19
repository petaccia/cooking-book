// App.jsx
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { UserProvider } from './contexts/UserContext';
import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Layout> 
        <Outlet />
      </Layout>
    </UserProvider>
  );
}

export default App;