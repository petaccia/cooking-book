import { useState, useEffect } from 'react';

const useFilters = (ingredients, types) => {
  const [filters, setFilters] = useState({ category: '', type: '' });
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    const { category, type } = filters;

    if (category) {
      setShowIngredients(true);
      const newFilteredTypes = types.filter(type =>
        ingredients.some(ingredient =>
          ingredient.category.includes(category) && ingredient.type.includes(type._id)
        )
      );
      setFilteredTypes(newFilteredTypes);
    } else {
      setShowIngredients(false);
      setFilteredTypes(types);
    }
  }, [filters.category, types, ingredients]);

  useEffect(() => {
    const { category, type } = filters;
    const newFilteredIngredients = ingredients.filter(ingredient => {
      return (
        (category === '' || ingredient.category.includes(category)) &&
        (type === '' || ingredient.type.includes(type))
      );
    });
    setFilteredIngredients(newFilteredIngredients);
  }, [filters, ingredients]);

  const handleFilterChange = (key) => (e) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  return { filters, filteredTypes, filteredIngredients, showIngredients, handleFilterChange };
};

export default useFilters;
