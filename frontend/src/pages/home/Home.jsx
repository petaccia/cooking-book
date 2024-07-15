import React, { useEffect, useState, useContext} from 'react';
import { getAllRecipes, getFavoriteRecipes } from '../../api/recipesApi';
import CardRecipe from '../../components/utils/cards/cardRecipe/CardRecipe';
import ModalAccueil from '../../components/utils/modals/ModalAccueil';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      const hasShownWelcomeToast = localStorage.getItem('hasShownWelcomeToast');
      if (!hasShownWelcomeToast) {
        toast.success('Bonjour ' + user.pseudo + ' !');
        localStorage.setItem('hasShownWelcomeToast', 'true');
      }
    }
  }, [user]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        setRecipes(response);
      } catch (error) {
        console.error('Erreur lors du chargement des recettes:', error);
        setError('Erreur lors du chargement des recettes. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    const fetchFavoriteRecipes = async () => {
      if (user) {
        try {
          const favoriteResponse = await getFavoriteRecipes(user._id);
          console.log("favoriteResponse in Home :", favoriteResponse);
          const favoriteRecipesIds = favoriteResponse.map(fav => fav.recipe._id);
          console.log("favoriteRecipesIds in Home :", favoriteRecipesIds);
          setFavoriteRecipes(favoriteRecipesIds);
        } catch (error) {
          console.error('Erreur lors du chargement des recettes favorites:', error);
        }
      }
    };

    fetchRecipes();
    fetchFavoriteRecipes();
  }, [user]);

  const updateFavoriteStatus = (recipeId, isFavorite) => {
    setFavoriteRecipes(prevFavorites => 
      isFavorite 
        ? [...prevFavorites, recipeId]
        : prevFavorites.filter(id => id !== recipeId)
    );
  };

  const handleOpenModal = () => {
    if (!user) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen p-4" onClick={handleOpenModal}>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Couverture du livre */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-8 text-center">
          <h1 className="text-3xl sm:text-6xl font-serif font-bold text-white mb-4 shadow-text">Cooking Book</h1>
          <p className="text-xl text-white italic shadow-text">Explorez les délicieuses recettes</p>
        </div>

        {/* Contenu du livre */}
        <div className="p-8 bg-orange-100 bg-opacity-50">
          <div className="mb-8 border-b-2 border-orange-600 pb-4">
            <h2 className="text-4xl font-serif font-bold text-orange-800">Nos Recettes</h2>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="loader border-t-4 border-orange-600 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recipes.map((recipe) => (
                <div key={recipe._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
                  <CardRecipe 
                    recipe={recipe} 
                    isFavorite={favoriteRecipes.includes(recipe._id)} 
                    updateFavoriteStatus={updateFavoriteStatus}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ModalAccueil show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Home;