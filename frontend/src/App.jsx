import React from 'react';
import Navbar from './components/navbar/Navbar';
import { UserProvider } from './contexts/UserContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
