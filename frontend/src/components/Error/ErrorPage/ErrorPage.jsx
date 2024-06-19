// ErrorPage.jsx
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import backgroundImageUrl from '../../../images/chef-sad.jpg';

const ErrorPage = () => {
  const error = useRouteError();
  console.error('Erreur :', error);


  return (
    <div
      className="bg-cover bg-top flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops ! Raté !</h1>
          <p className="text-lg text-gray-800 mb-6">
            Une erreur s'est glissée dans la cuisine.
          </p>
          <p className="text-gray-600 mb-8">
            {error.statusText || error.message}
          </p>
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Retourner au menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;