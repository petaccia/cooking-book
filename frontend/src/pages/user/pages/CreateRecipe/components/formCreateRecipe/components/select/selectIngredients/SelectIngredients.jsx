import React, { useState, useEffect } from 'react';
import { getAllIngredients, getAllCategories, getAllTypes } from '../../../../../../../../../api'; // Assurez-vous que le chemin est correct

const SelectIngredients = ({ selectedIngredients, setSelectedIngredients }) => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les ingrédients, les catégories et les types depuis l'API
  const fetchData = async () => {
    try {
      console.log("Récupération des données depuis l'API...");
      const [ingredientsRes, categoriesRes, typesRes] = await Promise.all([
        getAllIngredients(),
        getAllCategories(),
        getAllTypes(),
      ]);

      setIngredients(ingredientsRes || []);
      setCategories(categoriesRes || []);
      setTypes(typesRes || []);
      setFilteredTypes(typesRes || []);  // Initialiser filteredTypes avec tous les types

      console.log("Ingrédients récupérés :", ingredientsRes);
      console.log("Catégories récupérées :", categoriesRes);
      console.log("Types d'ingrédients récupérés :", typesRes);
    } catch (err) {
      console.error("Erreur lors de la récupération des données :", err);
      setError("Impossible de récupérer les données. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);  // Mettre à jour l'état de chargement une fois les données récupérées
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filtrer les types en fonction de la catégorie sélectionnée
    if (selectedCategory) {
      const newFilteredTypes = types.filter(type =>
        ingredients.some(ingredient =>
          ingredient.category.includes(selectedCategory) && ingredient.type.includes(type._id)
        )
      );
      setFilteredTypes(newFilteredTypes);
    } else {
      setFilteredTypes(types);  // Afficher tous les types si aucune catégorie n'est sélectionnée
    }
  }, [selectedCategory, types, ingredients]);

  useEffect(() => {
    // Filtrer les ingrédients en fonction de la catégorie et du type sélectionnés
    const newFilteredIngredients = ingredients.filter(ingredient => {
      return (
        (selectedCategory === '' || ingredient.category.includes(selectedCategory)) &&
        (selectedType === '' || ingredient.type.includes(selectedType))
      );
    });
    setFilteredIngredients(newFilteredIngredients);
  }, [selectedCategory, selectedType, ingredients]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedType('');  // Réinitialiser le type lorsque la catégorie change
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleIngredientToggle = (ingredient) => {
    if (selectedIngredients.some(selected => selected._id === ingredient._id)) {
      // Supprimer l'ingrédient si déjà sélectionné
      setSelectedIngredients(selectedIngredients.filter(selected => selected._id !== ingredient._id));
    } else {
      // Ajouter l'ingrédient à la liste des ingrédients sélectionnés
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
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
            {/* Sélecteur de catégorie */}
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

            {/* Sélecteur de type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-brown-700 mb-2">
                Type
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={handleTypeChange}
                className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              >
                <option value="">Tous les types</option>
                {filteredTypes.map(type => (
                  <option key={type._id} value={type._id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sélecteur d'ingrédients */}
            <div>
              <label htmlFor="ingredient" className="block text-sm font-medium text-brown-700 mb-2">
                Ingrédient
              </label>
              <select
                id="ingredient"
                value=""
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const ingredient = filteredIngredients.find(ing => ing._id === selectedId);
                  if (ingredient) {
                    handleIngredientToggle(ingredient);
                  }
                }}
                className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              >
                <option value="">Choisir un ingrédient</option>
                {filteredIngredients.map(ingredient => (
                  <option key={ingredient._id} value={ingredient._id}>
                    {ingredient.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Affichage des ingrédients filtrés */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredIngredients.map(ingredient => (
              <div
                key={ingredient._id}
                className={`relative p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer ${selectedIngredients.some(selected => selected._id === ingredient._id)
                    ? 'border-orange-500 bg-orange-200 ring-2 ring-orange-300'
                    : 'border-orange-200 bg-white'
                  }`}
                onClick={() => handleIngredientToggle(ingredient)}
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-medium text-center text-brown-800">{ingredient.name}</p>
                <p className="text-xs text-center text-brown-600 mt-1">
                  {(() => {
                    const categoryId = ingredient.category[0];
                    const category = categories.find(c => c._id === categoryId);
                    return category ? category.name : "Catégorie non trouvée";
                  })()}
                </p>
                <p className="text-xs text-center text-brown-600">
                  {(() => {
                    const typeId = ingredient.type[0];
                    const type = types.find(t => t._id === typeId);
                    return type ? type.name : "Type non trouvé";
                  })()}
                </p>
              </div>
            ))}
          </div>

          {/* Ingrédients sélectionnés */}
          {selectedIngredients.length > 0 && (
            <div className="mt-8 p-6 border-2 border-orange-500 rounded-lg shadow-lg bg-orange-50">
              <h2 className="text-xl font-bold mb-4 text-orange-700">Ingrédients sélectionnés</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {selectedIngredients.map(ingredient => (
                  <div key={ingredient._id} className="relative p-4 border border-orange-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                      onClick={() => setSelectedIngredients(selectedIngredients.filter(selected => selected._id !== ingredient._id))}
                    >
                      <span className="text-lg">&times;</span>
                    </button>
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                    <p className="text-sm font-medium text-center text-brown-800">{ingredient.name}</p>
                    <p className="text-xs text-center text-brown-600 mt-1">
                      {(() => {
                        const categoryId = ingredient.category[0];
                        const category = categories.find(c => c._id === categoryId);
                        return category ? category.name : "Catégorie non trouvée";
                      })()}
                    </p>
                    <p className="text-xs text-center text-brown-600">
                      {(() => {
                        const typeId = ingredient.type[0];
                        const type = types.find(t => t._id === typeId);
                        return type ? type.name : "Type non trouvé";
                      })()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SelectIngredients;
