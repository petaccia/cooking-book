import React from 'react';
import Select from '../../../../../../components/form/Select';
import { faList } from '@fortawesome/free-solid-svg-icons';

const TypeSelect = ({ selectedType, filteredTypes, handleTypeChange, showIngredients }) => {
  const option = [
    { value : '', label: 'Tous les types' },
    ...filteredTypes.map(type => ({ value: type._id, label: type.name })),
  ];

  const handleChange = (option) => {
    handleTypeChange({ target: { value: option.value } });
  };

  const customClassNames = {
    button: "w-full text-left relative cursor-pointer bg-gradient-to-t from-orange-700 to-orange-300 text-white rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
    option: "block w-full px-4 py-2 text-left text-orange-700 hover:bg-orange-100 transition-colors duration-200",
    dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 overflow-auto",
  };
  return (
    <Select
      options={option}
      onChange={handleChange}
      label="Type"
      icon={faList}
      value={selectedType}
      placeholder="Sélectionnez un type"
      customClassNames={customClassNames}
      maxHeight="200px" // Vous pouvez ajuster cette valeur selon vos besoins
    />
  );
};

export default TypeSelect;