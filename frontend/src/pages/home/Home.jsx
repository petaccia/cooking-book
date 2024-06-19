import React, { useEffect, useState, useContext } from 'react';
import { getAllRecipes } from '../../api/recipesApi';
import CardRecipe from '../../components/utils/cards/cardRecipe/CardRecipe';
import ModalAccueil from '../../components/utils/modals/ModalAccueil';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    fetchRecipes();

  }, [user]);

  const handleOpenModal = () => {
    if (!user) {
      setShowModal(true);
    }
  };
      
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen " onClick={handleOpenModal}>
      <div className="flex items-center justify-center flex-col p-4 mt-20 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl font-bold text-white">Cooking Book</h1>
        <p className="text-white text-lg">Explorez les délicieuses recettes.</p>
      </div>

      <div className="max-w-screen-lg mx-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {loading ? (
          <div className="flex items-center justify-center col-span-full">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center col-span-full">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          recipes.map((recipe) => (
            <CardRecipe key={recipe._id} recipe={recipe} />
          ))
        )}
      </div>

      <ModalAccueil show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Home;
