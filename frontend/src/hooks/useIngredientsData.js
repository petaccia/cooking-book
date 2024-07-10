import { useState, useEffect } from 'react';
import { getAllCategories, getAllIngredients, getAllTypes } from '../api';

const useIngredientsData = () => {
  const [data, setData] = useState({
    ingredients: [],
    categories: [],
    types: []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ingredientsRes, categoriesRes, typesRes] = await Promise.all([
          getAllIngredients(),
          getAllCategories(),
          getAllTypes(),
        ]);

        setData({
          ingredients: ingredientsRes || [],
          categories: categoriesRes || [],
          types: typesRes || []
        });
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Impossible de récupérer les données. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useIngredientsData;
