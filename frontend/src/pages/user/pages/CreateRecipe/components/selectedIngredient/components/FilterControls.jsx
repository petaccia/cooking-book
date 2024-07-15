import React from 'react'
import CategorySelect from '../../selectFormCreateRecipe/CategorySelect';
import TypeSelect from '../../selectFormCreateRecipe/TypeSelect';
import IngredientSelect from '../../selectFormCreateRecipe/IngredientSelect';
import FilteredIngredientsDisplay from '../../FilteredIngredientsDisplay';

const FilterControls = ({ filters, data, handleFilterChange, filteredTypes, filteredIngredients, showIngredients, handleIngredientToggle }) => {
  return (
    <div className="">
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
        selectedIngredients={filteredIngredients}
        handleIngredientToggle={handleIngredientToggle}
        categories={data.categories}
        types={data.types}
      />
    )}
  </div>
);
}

export default FilterControls;