import React from 'react';

const CardRecipe = ({ recipe }) => {
  return (
    <div className="max-w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-2">
          <h3 className="text-lg font-semibold text-white">{recipe.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="h-14 Text-gray-700 mb-4">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            {recipe.cookingTime} min
          </span>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 px-4 rounded-md hover:from-orange-500 hover:to-orange-600 transition-colors duration-300">
            Voir la recette
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
