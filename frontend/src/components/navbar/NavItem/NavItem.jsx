// NavItem.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      `text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-700' : ''}`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

export default NavItem;