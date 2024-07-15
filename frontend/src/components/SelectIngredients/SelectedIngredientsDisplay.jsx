import React from 'react';

const SelectedIngredientsDisplay = ({ selectedIngredients, setSelectedIngredients }) => {
  return (
    <div className="mt-8 p-6 border-2 border-orange-500 rounded-lg shadow-lg bg-orange-50">
      <h2 className="text-xl font-bold mb-4 text-orange-700">Ingrédients sélectionnés</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {selectedIngredients.map(ingredient => {
          console.log("Ingredient:", ingredient);
          
          const category = ingredient.category && ingredient.category[0];
          const type = ingredient.type && ingredient.type[0];
          
          console.log("Category:", category);
          console.log("Type:", type);

          return (
            <div key={ingredient._id} className="relative p-4 border border-orange-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => setSelectedIngredients(selectedIngredients.filter(selected => selected._id !== ingredient._id))}
              >
                <span className="text-lg">&times;</span>
              </button>
              {ingredient.image ? (
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-24 object-cover rounded-md mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'chemin/vers/image/par/defaut.jpg';
                  }}
                />
              ) : (
                <div className="w-full h-24 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
                  <span className="text-gray-500">Pas d'image</span>
                </div>
              )}
              <p className="text-sm font-medium text-center text-brown-800">{ingredient.name}</p>
              <p className="text-xs text-center text-brown-600 mt-1">
                {category ? category.name : "Catégorie non trouvée"}
              </p>
              <p className="text-xs text-center text-brown-600">
                {type ? type.name : "Type non trouvé"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedIngredientsDisplay;