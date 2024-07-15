import React from 'react';
import Select from '../../../../../../components/form/Select';
import { faList } from '@fortawesome/free-solid-svg-icons';

const IngredientSelect = ({ filteredIngredients, handleIngredientToggle, showIngredients }) => {
  const handleChange = (selectedOption) => {
    const selectedIngredient = filteredIngredients.find(ingredient => ingredient._id === selectedOption.value);
    if (selectedIngredient) {
      handleIngredientToggle(selectedIngredient);
    }
  };

  const options = filteredIngredients.map(ingredient => ({
    value: ingredient._id,
    label: ingredient.name
  }));


const customClassNames = {
  button: "w-full text-left relative cursor-pointer bg-gradient-to-t from-orange-700 to-orange-300 text-white rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
  option: "block w-full px-4 py-2 text-left text-orange-700 hover:bg-orange-100 transition-colors duration-200",
  dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 overflow-auto",
};

  return (
    <Select
      options={options}
      onChange={handleChange}
      label="Ingrédient"
      icon={faList}
      value={showIngredients}
      placeholder="Sélectionnez un ingrédient"
      customClassNames={customClassNames}
      maxHeight="200px" 
    />);
};

export default IngredientSelect;
