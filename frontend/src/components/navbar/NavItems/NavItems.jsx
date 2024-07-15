// NavItems.jsx
import React from 'react';
import NavItem from '../NavItem/NavItem';

const NavItems = ({ user, handleLogout, toggleMenu }) => {
  if (user) {
    return (
      <>
        <NavItem to="/" onClick={toggleMenu}>Accueil</NavItem>
        <NavItem to={`/user/my-cookbook/${user._id}`} onClick={toggleMenu}>Mon livre de Cuisine</NavItem>
        <NavItem to="/about" onClick={toggleMenu}>À propos</NavItem>
        <NavItem to="/contact" onClick={toggleMenu}>Contact</NavItem>
        <button
          onClick={() => {
            handleLogout();
            toggleMenu();
          }}
          className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Se déconnecter
        </button>
      </>
    );
  } else {
    return (
      <>
        <NavItem to="/login" onClick={toggleMenu}>Se connecter</NavItem>
        <NavItem to="/signup" onClick={toggleMenu}>S'inscrire</NavItem>
      </>
    );
  }
};

export default NavItems;