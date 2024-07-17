// Fonction utilitaire pour obtenir les catégories et types complets d'un ingrédient

const getFullIngredient = (ingredient, categories, types) => ({
  ...ingredient,
  category: Array.isArray(ingredient.category)
    ? ingredient.category.map(catId => categories.find(cat => cat._id === catId)).filter(Boolean)
    : ingredient.category
      ? [categories.find(cat => cat._id === ingredient.category)].filter(Boolean)
      : [],
  type: Array.isArray(ingredient.type)
    ? ingredient.type.map(typeId => types.find(t => t._id === typeId)).filter(Boolean)
    : ingredient.type
      ? [types.find(t => t._id === ingredient.type)].filter(Boolean)
      : []
});

export default getFullIngredient