import React from 'react';
import useIngredientsData from '../../../../../hooks/useIngredientsData';
import useFilters from '../../../../../hooks/useFilters';
import CategorySelect from '../../../../../components/SelectIngredients/CategorySelect';
import TypeSelect from '../../../../../components/SelectIngredients/TypeSelect';
import FilteredIngredientsDisplay from '../../../../../components/SelectIngredients/FilteredIngredientsDisplay';
import SelectedIngredientsDisplay from '../../../../../components/SelectIngredients/SelectedIngredientsDisplay';
import IngredientSelect from '../../../../../components/SelectIngredients/IngredientSelect';

const SelectIngredients = ({ selectedIngredients, setSelectedIngredients, register}) => {
  const { data, error, loading } = useIngredientsData();
  const { filters, filteredTypes, filteredIngredients, showIngredients, handleFilterChange } = useFilters(data.ingredients, data.types);
  const handleIngredientToggle = (ingredient) => {
    let newSelectedIngredients = [...selectedIngredients];
    if (selectedIngredients.some(selected => selected._id === ingredient._id)) {
      newSelectedIngredients = selectedIngredients.filter(selected => selected._id !== ingredient._id);
    } else {
      const fullIngredient = {
        ...ingredient,
        category: Array.isArray(ingredient.category) 
          ? ingredient.category.map(catId => data.categories.find(cat => cat._id === catId)).filter(Boolean)
          : ingredient.category 
            ? [data.categories.find(cat => cat._id === ingredient.category)].filter(Boolean)
            : [],
        type: Array.isArray(ingredient.type)
          ? ingredient.type.map(typeId => data.types.find(t => t._id === typeId)).filter(Boolean)
          : ingredient.type
            ? [data.types.find(t => t._id === ingredient.type)].filter(Boolean)
            : []
      };
      newSelectedIngredients = [...selectedIngredients, fullIngredient];
    }
    setSelectedIngredients(newSelectedIngredients);
    register("selectedIngredients").onChange({ target: { name: "selectedIngredients", value: newSelectedIngredients } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-orange-100 rounded-lg shadow-xl border-2 border-orange-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Sélection d'ingrédients</h1>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CategorySelect
              selectedCategory={filters.category}
              categories={data.categories}
              handleCategoryChange={handleFilterChange('category')}
            />
            <TypeSelect
              selectedType={filters.type}
              filteredTypes={filteredTypes}
              handleTypeChange={handleFilterChange('type')}
              showIngredients={showIngredients}
            />
            <IngredientSelect
              filteredIngredients={filteredIngredients}
              handleIngredientToggle={handleIngredientToggle}
              showIngredients={showIngredients}
            />
          </div>

          {showIngredients && (
            <FilteredIngredientsDisplay
              filteredIngredients={filteredIngredients}
              selectedIngredients={selectedIngredients}
              handleIngredientToggle={handleIngredientToggle}
              categories={data.categories}
              types={data.types}
            />
          )}

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
