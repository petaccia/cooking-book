import React from 'react';
import './BookRecipePage.css';
import CardIngredient from '../../../../../../components/utils/cards/cardIngredients/CardIngredient';
import CardSteps from '../../../../../../components/utils/cards/cardSteps/CardSteps';

const BookRecipePage = ({ recipe }) => {
  if (!recipe) {
    return <div className="flex items-center justify-center h-full">Recette non disponible</div>;
  }

  return (
    <div className="h-full p-6 bg-orange-100 border-r-8 border-orange-50 font-serif overflow-hidden flex flex-col">
      <h2 className="text-3xl font-bold mb-2 text-sepia-800 text-center font-display">{recipe.title}</h2>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-4"> {/* Ajout de padding-right pour la scrollbar */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
        />
        
        <p className="text-lg mb-4 text-sepia-600 italic h-16">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sepia-700 mb-4 bg-white rounded-xl px-4 py-2 shadow-md">
          <p>👨‍🍳 {recipe.author.pseudo}</p>
          <p>⏱ {recipe.tcookingTime} min</p>
          <p>🔥 {recipe.level}</p>
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-sepia-800">Ingrédients</h3>
        <div className="mb-4 grid grid-cols-2 gap-2">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <CardIngredient key={index} ingredient={ingredient} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-sepia-800">Instructions</h3>
        <div className="list-decimal list-inside space-y-2">
          {recipe.steps && recipe.steps.map((step, index) => (
            <CardSteps key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRecipePage;