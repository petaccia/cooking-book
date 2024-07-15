import React from 'react';

const FilteredIngredientsDisplay = ({ filteredIngredients, selectedIngredients, handleIngredientToggle, categories, types }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredIngredients.map(ingredient => (
        <div
          key={ingredient._id}
          className={`relative p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${selectedIngredients.some(selected => selected._id === ingredient._id)
              ? 'border-orange-500 bg-orange-200 ring-2 ring-orange-300'
              : 'border-orange-200 bg-white'
            }`}
          onClick={() => handleIngredientToggle(ingredient)}
        >
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full h-24 object-cover rounded-md mb-2"
          />
          <p className="text-sm font-medium text-center text-brown-800">{ingredient.name}</p>
          <p className="text-xs text-center text-brown-600 mt-1">
            {(() => {
              const categoryId = ingredient.category[0];
              const category = categories.find(c => c._id === categoryId);
              return category ? category.name : "Catégorie non trouvée";
            })()}
          </p>
          <p className="text-xs text-center text-brown-600">
            {(() => {
              const typeId = ingredient.type[0];
              const type = types.find(t => t._id === typeId);
              return type ? type.name : "Type non trouvé";
            })()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilteredIngredientsDisplay;
