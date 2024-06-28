// BookCover.js
import React from 'react';
import Logo from '../../../../../../images/logo/logo.png';

const BookCover = ({ user }) => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
      <div className="book-spine absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-orange-700 transform -translate-x-2 sm:-translate-x-4 skew-y-3"></div>
      <div className="book-content relative z-10 h-full flex flex-col justify-between p-4 sm:p-6">
        <h1 className="title text-2xl sm:text-3xl font-bold text-center bg-orange-800/80 rounded-md p-3 sm:p-4 mb-6 sm:mb-8 shadow-md">
          Livre de Cuisine Numérique
        </h1>
        <div className="flex-grow flex flex-col items-center justify-between">
          <div className="logo-container w-full flex justify-center items-center mb-6 sm:mb-8">
            <img src={Logo} alt="Logo" className="w-1/2 h-auto max-h-36 sm:max-h-48 object-contain drop-shadow-lg" />
          </div>
          <div className="info text-center">
            <h2 className="title text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">Mes Recettes Préférées</h2>
          </div>
        </div>
        <p className="author text-xl sm:text-2xl italic drop-shadow pb-4 sm:pb-6">
          Par {user?.pseudo || 'Anonyme'}
        </p>
      </div>
    </div>
  );
};

export default BookCover;