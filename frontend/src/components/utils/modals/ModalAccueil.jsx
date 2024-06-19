// ModalAccueil.jsx
import React from 'react';

const ModalAccueil = ({ show, handleClose }) => {
  if (!show) return null;

  const handleModalClick = (event) => {
    event.stopPropagation(); // Empêche la propagation du clic à l'élément parent
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
      <div className="modal-content bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full" onClick={handleModalClick}>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Bienvenue sur Cooking Book!</h2>
        <p className="mb-6 text-gray-700">
          Découvrez notre collection de recettes délicieuses. Veuillez vous inscrire ou vous connecter pour accéder à toutes nos recettes.
        </p>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            onClick={() => window.location.href = '/login'}
          >
            Se connecter
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => window.location.href = '/signup'}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAccueil;
