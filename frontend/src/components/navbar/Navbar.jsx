import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-full  fixed top-0 left-0 bg-orange-600 py-4 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Cooking Book
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Accueil
              </Link>
              <Link
                to="/recipes"
                className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Recettes
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                À propos
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/login"
                className="text-white hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Se connecter
              </Link>
              <Link
                to="/signup"
                className="bg-white text-orange-500 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-4"
              >
                S'inscrire
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-orange-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
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

      <div className={`md:hidden transition duration-300 ${isOpen ? 'h-screen' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          <Link
            to="/"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Accueil
          </Link>
          <Link
            to="/recipes"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Recettes
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-orange-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            À propos
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-orange-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Avatar"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-orange-300">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700 hover:text-white"
            >
              Se connecter
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700 hover:text-white"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;