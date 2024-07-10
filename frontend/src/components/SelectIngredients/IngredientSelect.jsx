import React from 'react';

const IngredientSelect = ({ filteredIngredients, handleIngredientToggle, showIngredients }) => {
  return (
    <div>
      <label htmlFor="ingredient" className="block text-sm font-medium text-brown-700 mb-2">
        Ingrédient
      </label>
      <select
        id="ingredient"
        value=""
        onChange={(e) => {
          const selectedId = e.target.value;
          const ingredient = filteredIngredients.find(ing => ing._id === selectedId);
          if (ingredient) {
            handleIngredientToggle(ingredient);
          }
        }}
        className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
        disabled={!showIngredients}
      >
        <option value="">Choisir un ingrédient</option>
        {filteredIngredients.map(ingredient => (
          <option key={ingredient._id} value={ingredient._id}>
            {ingredient.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IngredientSelect;
