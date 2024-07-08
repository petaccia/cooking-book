import React, { useState, useEffect } from 'react';
import { getAllIngredients } from '../../../../../../../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const SelectIngredients = ({ setSelectedIngredients, selectedIngredients, setIngredients, ingredients }) => {
  const [error, setError] = useState(null);

  // Charger les ingrédients
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getAllIngredients();
        setIngredients(response);
      } catch (err) {
        console.error("Erreur lors de la récupération des ingrédients", err);
        setError("Impossible de charger les ingrédients. Veuillez réessayer plus tard.");
      }
    };
    fetchIngredients();
  }, [setIngredients]);

  

  // Ajouter un ingrédient à la liste
  const handleIngredientSelect = (event) => {
    const selectedId = event.target.value;
    const ingredient = ingredients.find(ing => ing._id === selectedId);
    if (ingredient && !selectedIngredients.some(ing => ing._id === selectedId)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  // Supprimer un ingrédient de la liste
  const removeIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing._id !== id));
  };

    // Convertir les ingrédients sélectionnés en éléments d'affichage
  const filteredIngredientOptions = ingredients
    .filter(ing => !selectedIngredients.some(selected => selected._id === ing._id))
    .map(ingredient => (
      <option key={ingredient._id} value={ingredient._id}>
        {ingredient.name}
      </option>
    ));

  const selectedIngredientsList = selectedIngredients.map(ingredient => (
    <div key={ingredient._id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={ingredient.image} alt={ingredient.name} className="w-24 h-24 object-cover rounded-full mb-2" />
      <p className="text-center text-sm font-medium">{ingredient.name}</p>
      <button
        type="button"
        onClick={() => removeIngredient(ingredient._id)}
        className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center"
      >
        <FontAwesomeIcon icon={faMinus} className="mr-1" />
        Retirer
      </button>
    </div>
  ));

  return (
    <>
      <div>
        <label htmlFor="ingredients" className="flex items-center text-sm font-medium text-orange-700">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Ajouter des ingrédients
        </label>
        <select
          onChange={handleIngredientSelect}
          className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
        >
          <option value="">Sélectionnez un ingrédient</option>
          {filteredIngredientOptions}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedIngredientsList}
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </>
  );
};

export default SelectIngredients;
