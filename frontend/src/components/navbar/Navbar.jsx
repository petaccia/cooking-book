import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import NavItems from './NavItems/NavItems';

const Navbar = () => {
  const { user, logout } = useContext(UserContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-orange-600 py-4 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-bold text-xl">
              Cooking Book
            </NavLink>
          </div>
          <div className="hidden md:flex items-center">
            <NavItems user={user} handleLogout={handleLogout} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-orange-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {user && (
            <Link to={`/user/profile/${user._id}`} className="hidden md:block">
              <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-white shadow rounded-full p-2" />
            </Link>
          )}
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col mt-8">
          <NavItems user={user} handleLogout={handleLogout} toggleMenu={toggleMenu} />
        </div>
        {user && (
          <div className="pt-4 pb-3 border-t border-orange-700">
            <div className="flex items-center px-5">
              <Link to={`/user/profile/${user._id}`} className="flex-shrink-0">
                <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-white shadow rounded-full p-2" />
              </Link>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.pseudo}</div>
                <div className="text-sm font-medium text-orange-300">{user.email}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;