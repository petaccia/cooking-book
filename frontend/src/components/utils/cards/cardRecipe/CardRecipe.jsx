import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addFavoriteRecipe } from '../../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { deleteFavoriteRecipe } from '../../../../api/recipesApi';

const CardRecipe = ({ recipe }) => {
  const { user } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (user) {
      navigate(`/recipe/${recipe._id}`);
    } else {
      navigate('/login');
    }
  };

  const handleFavoriteClick = async () => {
    if (user) {
      try {
        if (isFavorite) {
          const response = await deleteFavoriteRecipe(user._id, recipe._id);
          console.log("Suppression d'une recette des favoris :", response);
          toast.info('Recette supprimée des favoris !');
          setIsFavorite(false);
        } else {
          const response = await addFavoriteRecipe(user._id, recipe._id);
          console.log("Ajout d'une recette aux favoris :", response);
          toast.success('Recette ajoutée aux favoris !');
          setIsFavorite(true);
        }
        } catch (error) {
          console.error("Erreur lors de l'ajout d'une recette aux favoris :", error);
          toast.error('Une erreur est survenue : ' + error.message);
        }
      } else {
        navigate('/login');
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-orange-200 hover:border-orange-300">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={isFavorite ? faHeartSolid : faHeartRegular}
              className="w-6 h-6"
            />
          </button>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-orange-800 to-transparent w-full p-2">
            <h3 className="text-lg font-serif font-semibold text-white shadow-text">{recipe.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="h-14 text-gray-700 mb-4 overflow-hidden text-sm">{recipe.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-orange-600">
              {recipe.tcookingTime} min
            </span>
            <button
              onClick={handleCardClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 text-sm font-medium shadow-md"
            >
              Voir la recette
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default CardRecipe;
