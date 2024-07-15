import React from 'react';
import { faList } from "@fortawesome/free-solid-svg-icons";
import Select from '../../../../../../components/form/Select'; 

const CategorySelect = ({ selectedCategory, categories, handleCategoryChange }) => {
  const options = [
    { value: '', label: 'Toutes les catégories' },
    ...categories.map(category => ({
      value: category._id,
      label: category.name
    }))
  ];

  const handleChange = (option) => {
    handleCategoryChange({ target: { value: option.value } });
  };

  const customClassNames = {
    button: "w-full text-left relative cursor-pointer bg-gradient-to-t from-orange-700 to-orange-300 text-white rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
    option: "block w-full px-4 py-2 text-left text-orange-700 hover:bg-orange-100 transition-colors duration-200",
    dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 overflow-auto",
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      label="Catégorie"
      icon={faList}
      value={selectedCategory}
      placeholder="Sélectionnez une catégorie"
      customClassNames={customClassNames}
      maxHeight="200px" 
    />
  );
};

export default CategorySelect;
