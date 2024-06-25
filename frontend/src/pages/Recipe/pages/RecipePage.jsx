import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../../../api/recipesApi';
import Loader from '../../../components/loader/Loader';

const RecipePage = () => {
  const { id } = useParams(); // Récupération de l'identifiant de la recette depuis l'URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Recipe ID:", id); // Vérifiez que l'ID est correctement récupéré

    const fetchRecipe = async () => {
      try {
        if (id) {
          const data = await getRecipeById(id);
          setRecipe(data);
        } else {
          throw new Error('Invalid recipe ID');
        }
      } catch (error) {
        setError('Erreur lors du chargement de la recette. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {recipe && (
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4" />
          <p className="text-lg mb-4">{recipe.description}</p>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Ingrédients</h2>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside">
              {recipe.steps.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;
