import React from 'react'

const CardRecipe = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            {recipe.cookingTime} min
          </span>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300">
            Voir la recette
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardRecipe