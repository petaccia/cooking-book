// components/MobileRecipeCard/MobileRecipeCard.jsx
import React from 'react';

const MobileRecipeCard = ({ recipe }) => {
  return (
    <div className="bg-cream-100 rounded-lg shadow-md overflow-hidden bg-orange-100">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-sepia-800">{recipe.title}</h2>
        <p className="text-sm text-sepia-600 mb-3">{recipe.description}</p>
        <div className="flex justify-between text-xs text-sepia-700">
          <span>⏱ {recipe.tcookingTime} min</span>
          <span>👨‍🍳 {recipe.author[0].pseudo}</span>
          <span>🔥 {recipe.level}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileRecipeCard;