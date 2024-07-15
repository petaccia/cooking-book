import { useState, useEffect } from 'react';

const useFilters = (ingredients, types) => {
  // State pour stocker les filtres sélectionnés
  const [filters, setFilters] = useState({ category: '', type: '' });

  // State pour stocker les types filtrés
  const [filteredTypes, setFilteredTypes] = useState([]);

  // State pour stocker les ingrédients filtrés
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  // State pour indiquer si les ingrédients doivent être affichés
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    const { category } = filters;

    if (category) {
      // Afficher les ingrédients si une catégorie est sélectionnée
      setShowIngredients(true);

      // Filtrer les types basés sur les ingrédients de la catégorie sélectionnée
      const newFilteredTypes = types.filter(type =>
        ingredients.some(ingredient =>
          ingredient.category.includes(category) && ingredient.type.includes(type._id)
        )
      );

      // Mettre à jour les types filtrés
      setFilteredTypes(newFilteredTypes);
    } else {
      // Masquer les ingrédients si aucune catégorie n'est sélectionnée
      setShowIngredients(false);

      // Réinitialiser les types filtrés
      setFilteredTypes(types);
    }
  }, [filters.category, types, ingredients]);

  useEffect(() => {
    const { category, type } = filters;

    // Filtrer les ingrédients basés sur les filtres sélectionnés
    const newFilteredIngredients = ingredients.filter(ingredient => {
      return (
        (category === '' || ingredient.category.includes(category)) &&
        (type === '' || ingredient.type.includes(type))
      );
    });

    // Mettre à jour les ingrédients filtrés
    setFilteredIngredients(newFilteredIngredients);
  }, [filters, ingredients]);

  // Fonction pour gérer les changements de filtres
  const handleFilterChange = (key) => (e) => {
    // Mettre à jour les filtres avec la nouvelle valeur
    setFilters({ ...filters, [key]: e.target.value });
  };

  // Retourner les états et les fonctions de gestion des filtres
  return { filters, filteredTypes, filteredIngredients, showIngredients, handleFilterChange };
};

export default useFilters;
