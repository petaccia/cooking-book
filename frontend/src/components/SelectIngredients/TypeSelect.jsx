import React from 'react';

const TypeSelect = ({ selectedType, filteredTypes, handleTypeChange, showIngredients }) => {
  return (
    <div>
      <label htmlFor="type" className="block text-sm font-medium text-brown-700 mb-2">
        Type
      </label>
      <select
        id="type"
        value={selectedType}
        onChange={handleTypeChange}
        className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
        disabled={!showIngredients}
      >
        <option value="">Tous les types</option>
        {filteredTypes.map(type => (
          <option key={type._id} value={type._id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelect;
