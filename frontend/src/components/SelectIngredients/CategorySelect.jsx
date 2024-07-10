import React from 'react';

const CategorySelect = ({ selectedCategory, categories, handleCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-brown-700 mb-2">
        Catégorie
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
      >
        <option value="">Toutes les catégories</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
