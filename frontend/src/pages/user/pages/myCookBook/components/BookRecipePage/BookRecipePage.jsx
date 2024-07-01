import React from 'react';
import './BookRecipePage.css';

const BookRecipePage = ({ recipe }) => {
  if (!recipe) {
    return <div className="flex items-center justify-center h-full">Recette non disponible</div>;
  }

  return (
    <div className="h-full p-4 bg-cream-100 font-serif overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* En-tête de la recette */}
        <h2 className="text-3xl font-bold mb-1 text-sepia-800 text-center font-display">{recipe.title}</h2>
        <p className="text-sm mb-2 text-sepia-600 italic text-center">{recipe.description}</p>

        {/* Image et informations */}
        <div className="mb-4 flex flex-col items-center">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-lg shadow-lg mb-2"
          />
          <div className="flex justify-between w-full text-sepia-700 text-xs">
            <p><span className="font-semibold">Chef :</span> {recipe.author[0].pseudo}</p>
            <p><span className="font-semibold">Temps :</span> {recipe.tcookingTime} min</p>
            <p><span className="font-semibold">Difficulté :</span> {recipe.level}</p>
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {/* Ingrédients */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-sepia-800 border-b border-sepia-300 pb-1">Ingrédients</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex flex-col items-center bg-cream-200 p-2 rounded-lg shadow text-center">
                  <img
                    src={ingredient.ingredientId.image}
                    alt={ingredient.ingredientId.name}
                    className="w-8 h-8 object-cover rounded-full shadow mb-1"
                  />
                  <p className="font-medium text-sepia-800 text-xs">{ingredient.ingredientId.name}</p>
                  <p className="text-xs text-sepia-600">{ingredient.quantity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-sepia-800 border-b border-sepia-300 pb-1">Instructions</h3>
            <ol className="space-y-2">
              {recipe.steps && recipe.steps.map((step, index) => (
                <li key={index} className="bg-cream-200 p-2 rounded-lg shadow text-sm">
                  <span className="font-semibold text-sepia-800 mr-1">{index + 1}.</span>
                  <span className="text-sepia-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRecipePage;