import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../../../api';
import Loader from '../../../components/loader/Loader';

const RecipePage = () => {
  const { id } = useParams(); // Récupération de l'identifiant de la recette depuis l'URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div className="recipe-container max-w-screen-lg mx-auto p-4 bg-slate-100 rounded-lg shadow-lg shadow-gray-900 overflow-hidden  ">
      {recipe && (
        <div className="recipe-content bg-white rounded-lg shadow-lg shadow-gray-900 p-6">
          <h1 className="recipe-title text-4xl font-bold mb-4 text-stone-800">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="recipe-image w-full h-auto mb-4 object-cover rounded-lg" />
          <p className="recipe-description text-lg mb-4 text-stone-500 italic font-medium">{recipe.description}</p>
          <div className="recipe-ingredients mb-6 border-b-2 pb-2 border-stone-800">
            <h2 className="ingredients-title text-2xl font-semibold mb-6 border-b-2 pb-2 border-stone-800 ">Ingrédients</h2>
            <ul className="ingredients-list list-disc list-inside mx-2 h-40 overflow-y-auto w-full flex flex-col ">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item  mb-2 text-stone-500 font-medium text-lg leading-normal h-10  flex  justify-between items-center px-4">
                  <span>{ingredient.name}</span>
                  {ingredient.image && (
                    <img src={ingredient.image} alt={ingredient.name} className="ingredient-image w-10 h-10 object-cover ml-4 rounded-full  border-2 border-stone-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-instructions">
            <h2 className="instructions-title text-2xl font-semibold mb-2 border-b-2 pb-2 border-stone-800">Instructions</h2>
            <ol className="instructions-list list-decimal list-inside mx-2">
              {recipe.steps.map((instruction, index) => (
                <li key={index} className="instruction-item mb-2">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;
