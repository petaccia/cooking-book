// App.jsx
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { UserProvider } from './contexts/UserContext';
import Router from './router';

function App() {
  return (
    <UserProvider>
     
      <Router />
    </UserProvider>
  );
}

export default App;