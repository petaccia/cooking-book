import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../../../../contexts/UserContext';
import Logo from '../../../../components/utils/logo/Logo';
import { getFavoriteRecipes } from '../../../../api';

const MyBookCook = () => {
  const { user } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      if (user) {
        try {
          const favoriteRecipes = await getFavoriteRecipes(user._id);
          setRecipes(favoriteRecipes.map(fav => fav.recipe));
        } catch (error) {
          console.error('Erreur lors du chargement des recettes favorites:', error);
        }
      }
    };
    fetchFavoriteRecipes();
  }, [user]);

  const nextPage = () => {
    if (currentPage < recipes.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -180 : 180,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? -180 : 180,
    }),
  };

  const pageTransition = {
    type: 'tween',
    duration: 0.5,
  };

  return (
    <div className="container max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-serif text-orange-800 text-center mb-8">Mon Livre de Cuisine</h1>
      
      <div className="hidden md:flex justify-center items-center space-x-4">
        <button 
          onClick={prevPage} 
          className="bg-orange-500 text-white px-4 py-2 rounded-full" 
          disabled={currentPage === 0}
        >
          &#8592; Page précédente
        </button>
        
        <div className="relative w-[800px] h-[600px] bg-orange-100 rounded-lg shadow-2xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              className="absolute inset-0 flex"
              style={{ perspective: 1000 }}
            >
              {currentPage === 0 ? (
                <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-600" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                  <div className="absolute top-4 left-4 w-24 h-24">
                    <Logo />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-4xl font-serif mb-4">Mon Livre de Cuisine</h1>
                    <p className="text-lg">{user?.pseudo || 'Anonyme'}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-1/2 h-full bg-orange-100 flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-serif text-orange-800 mb-4">{recipes[currentPage - 1]?.title}</h2>
                    <p className="text-gray-600">{recipes[currentPage - 1]?.description}</p>
                  </div>
                  <div className="w-0.5 h-full bg-gray-300"></div>
                  <div className="w-1/2 h-full bg-orange-100 flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-serif text-orange-800 mb-4">{recipes[currentPage]?.title}</h2>
                    <p className="text-gray-600">{recipes[currentPage]?.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button 
          onClick={nextPage} 
          className="bg-orange-500 text-white px-4 py-2 rounded-full" 
          disabled={currentPage >= recipes.length - 1}
        >
          Page suivante &#8594;
        </button>
      </div>

      <div className="md:hidden">
        {currentPage === 0 ? (
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-8 rounded-lg shadow-lg text-white text-center">
            <Logo />
            <h1 className="text-4xl font-serif mb-4">Bienvenue dans Mon Livre de Cuisine</h1>
            <p className="text-lg">Par {user?.pseudo || 'Anonyme'}</p>
          </div>
        ) : (
          <div className="bg-orange-100 rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-2xl font-serif text-orange-800 mb-2">{recipes[currentPage - 1]?.title}</h2>
            <p className="text-gray-600 mb-4">{recipes[currentPage - 1]?.description}</p>
            <div className="flex justify-between">
              <button 
                onClick={prevPage} 
                className="bg-orange-500 text-white px-3 py-1 rounded" 
                disabled={currentPage === 0}
              >
                Précédent
              </button>
              <button 
                onClick={nextPage} 
                className="bg-orange-500 text-white px-3 py-1 rounded" 
                disabled={currentPage >= recipes.length - 1}
              >
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookCook;