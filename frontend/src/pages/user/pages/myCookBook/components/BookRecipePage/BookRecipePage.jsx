import React from 'react';
import './BookRecipePage.css';

const BookRecipePage = ({ recipe }) => {
  if (!recipe) {
    return <div className="flex items-center justify-center h-full">Recette non disponible</div>;
  }

  return (
    <div className="h-full p-6 bg-orange-100 font-serif overflow-hidden flex flex-col">
      <h2 className="text-3xl font-bold mb-2 text-sepia-800 text-center font-display">{recipe.title}</h2>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-4"> {/* Ajout de padding-right pour la scrollbar */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
        />
        
        <p className="text-lg mb-4 text-sepia-600 italic">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sepia-700 mb-4 bg-white rounded-xl px-4 py-2 shadow-md">
          <p>👨‍🍳 {recipe.author[0].pseudo}</p>
          <p>⏱ {recipe.tcookingTime} min</p>
          <p>🔥 {recipe.level}</p>
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-sepia-800">Ingrédients</h3>
        <ul className="mb-4 grid grid-cols-2 gap-2">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center bg-cream-200 p-2 rounded shadow-sm">
              <img
                src={ingredient.ingredientId.image}
                alt={ingredient.ingredientId.name}
                className="w-8 h-8 object-cover rounded-full mr-2"
              />
              <span className="text-sm">{ingredient.quantity} {ingredient.ingredientId.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-2 text-sepia-800">Instructions</h3>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps && recipe.steps.map((step, index) => (
            <li key={index} className="bg-cream-100 p-3 rounded shadow-sm">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookRecipePage;