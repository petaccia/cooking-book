import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../../api';
import Loader from '../../components/loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faClock} from '@fortawesome/free-solid-svg-icons';


const RecipePage = () => {
  const { id } = useParams();
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
          throw new Error("L'identifiant de la recette est manquant");
        }
      } catch (error) {
        setError("Erreur lors du chargement de la recette. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="recipe-container max-w-screen-lg mx-auto p-4 rounded-lg shadow-lg overflow-hidden">
      {recipe && (
        <div className="recipe-content bg-white rounded-lg shadow-lg p-6">
          <h1 className="recipe-title text-xl text-center sm:text-4xl sm:text-left font-bold mb-4 text-stone-800">{recipe.title}</h1>
          
          {/* Nouvelle section pour les informations générales */}
          <div className="recipe-info flex justify-between items-center mb-4 text-stone-600">
            <div className="author flex items-center">
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              <span className="text-xs sm:text-base">Par {recipe.author[0].pseudo||recipe.author[0].name}</span>
            </div>
            <div className="cooktime flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              <span className="text-xs sm:text-base">Temps de cuisson : {recipe.tcookingTime} minutes</span>
            </div>
          </div>

          <img src={recipe.image} alt={recipe.title} className="recipe-image w-full h-auto mb-4 object-cover rounded-lg" />
          <p className="recipe-description text-lg mb-4 text-stone-500 italic font-medium">{recipe.description}</p>
          <div className="recipe-ingredients mb-4 border-b-2 pb-2 border-stone-800">
            <h2 className="ingredients-title text-2xl font-semibold mb-6 border-b-2 pb-2 border-stone-800">Ingrédients</h2>
            <div className="ingredients-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto max-h-96">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center ">
                  {ingredient.ingredientId.image && (
                    <img src={ingredient.ingredientId.image} alt={ingredient.ingredientId.name} className="ingredient-image w-20 h-20 object-cover mb-2 rounded-full border-2 border-stone-300" />
                  )}
                  <span className="ingredient-name text-stone-800 font-semibold text-lg">{ingredient.ingredientId.name}</span>
                  <span className="ingredient-quantity text-stone-500 font-medium text-sm">{ingredient.quantity} {ingredient.ingredientId.unit}</span>
                </div>
              ))}
            </div>
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