import { useState, useEffect } from 'react';
import { getAllCategories, getAllIngredients, getAllTypes } from '../api';

const useIngredientsData = () => {

  // State pour stocker les données des ingrédients, catégories et types
  const [data, setData] = useState({
    ingredients: [],
    categories: [],
    types: []
  });

  // State pour stocker les erreurs éventuelles lors de la récupération des données
  const [error, setError] = useState(null);

  // State pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des ingrédients, catégories et types
    const fetchData = async () => {
      try {
        // Effectuer les appels API en parallèle pour récupérer les données
        const [ingredientsRes, categoriesRes, typesRes] = await Promise.all([
          getAllIngredients(),
          getAllCategories(),
          getAllTypes(),
        ]);

        // Mettre à jour l'état avec les données récupérées
        setData({
          // Traiter les données des ingrédients
          ingredients: (ingredientsRes || []).map(ingredient => ({
            // Copier les données de chaque ingrédient
            ...ingredient,
            // Vérifier si la valeur de category est un tableau, sinon la convertir en tableau
            category: Array.isArray(ingredient.category) ? ingredient.category : [ingredient.category],
            // Vérifier si la valeur de type est un tableau, sinon la convertir en tableau
            type: Array.isArray(ingredient.type) ? ingredient.type : [ingredient.type]
          })),
          // Vérifier si les données des catégories sont valides ou sinon retourner un tableau vide
          categories: categoriesRes || [],
          // Vérifier si les données des types sont valides ou sinon retourner un tableau vide
          types: typesRes || []
        });
      } catch (err) {
        // En cas d'erreur, mettre à jour l'état d'erreur et afficher un message d'erreur
        console.error("Erreur lors de la récupération des données :", err);
        setError("Impossible de récupérer les données. Veuillez réessayer plus tard.");
      } finally {
        // Indiquer que le chargement est terminé
        setLoading(false);
      }
    };

    // Appeler la fonction fetchData au montage du composant
    fetchData();
  }, []);

  // Retourner les états des données, de l'erreur et du chargement
  return { data, error, loading };
};

export default useIngredientsData;
