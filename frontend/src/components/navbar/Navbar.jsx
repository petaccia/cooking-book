import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-orange-600 py-4 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Cooking Book
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Accueil
                </Link>
                <Link
                  to={`/user/myBookCook/${user.id}`}
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mon livre de Cuisine
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  À propos
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Se déconnecter
                </button>
                <Link
                  to={`/user/profile/${user.id}`}
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faUserCircle} size="3x" className="ml-4" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Se connecter
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-orange-500 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-orange-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/recipes"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Recettes
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          {user && (
            <Link
              to={`/user/profile/${user.id}`}
              className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Information personnelle
            </Link>
          )}
        </div>
        {user ? (
          <div className="pt-4 pb-3 border-t border-orange-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-white shadow rounded-full p-2" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.pseudo}</div>
                <div className="text-sm font-medium text-orange-300">{user.email}</div>
              </div>
            </div>
            <div className="mt-3 px-2">
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700 hover:text-white"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 px-2 space-y-1">
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Se connecter
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
