import React from 'react';
import useIngredientsData from '../../../../../hooks/useIngredientsData';
import useFilters from '../../../../../hooks/useFilters';
import SelectedIngredientsDisplay from '../selectForm/SelectedIngredientsDisplay';
import getFullIngredient from './getFullIngredient';
import FilterControls from './FilterControls';
import Loader from '../../../../../components/loader/Loader';

// Composant principal
const SelectIngredients = ({ selectedIngredients, setSelectedIngredients}) => {
  const { data, error, loading } = useIngredientsData();
  const { filters, filteredTypes, filteredIngredients, showIngredients, handleFilterChange } = useFilters(data.ingredients, data.types);

  const handleIngredientToggle = (ingredient) => {
    const isSelected = selectedIngredients.some(selected => selected._id === ingredient._id);
    const newSelectedIngredients = isSelected 
      ? selectedIngredients.filter(selected => selected._id !== ingredient._id)
      : [...selectedIngredients, getFullIngredient(ingredient, data.categories, data.types)];

    setSelectedIngredients(newSelectedIngredients);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-orange-100 rounded-lg shadow-xl border-2 border-orange-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Sélection d'ingrédients</h1>

      {loading && <Loader />}

      {error && <ErrorMessage error={error} />}

      {!loading && !error && (
        <>
          <FilterControls
            filters={filters}
            data={data}
            handleFilterChange={handleFilterChange}
            showIngredients={showIngredients}
            filteredTypes={filteredTypes}
            filteredIngredients={filteredIngredients}
            handleIngredientToggle={handleIngredientToggle}
          />
          {selectedIngredients.length > 0 && (
            <SelectedIngredientsDisplay
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
              categories={data.categories}
              types={data.types}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SelectIngredients;