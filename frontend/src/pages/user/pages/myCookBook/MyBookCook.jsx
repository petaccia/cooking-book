import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserContext } from '../../../../contexts/UserContext';
import Logo from '../../../../components/utils/logo/Logo';

const MyBookCook = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [recipes, setRecipes] = useState([]);

  // Simulons le chargement des recettes (à remplacer par un vrai appel API)
  useEffect(() => {
    // Remplacez ceci par votre logique de chargement des recettes
    setRecipes([
      { id: 1, title: "Recette 1", description: "Description de la recette 1" },
      { id: 2, title: "Recette 2", description: "Description de la recette 2" },
      // ... ajoutez plus de recettes ici
    ]);
  }, [id]);

  const nextPage = () => {
    if (currentPage < recipes.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
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
        
        <div className="relative w-[800px] h-[600px] bg-orange-100 rounded-lg shadow-2xl overflow-hidden ">
          {/* Couverture du livre de cuisine */}
          {currentPage === 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 clip-cover">
              <div className="absolute top-4 left-4 w-24 h-24">
                <Logo />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <h1 className="text-4xl font-serif mb-4">Mon Livre de Cuisine</h1>
                <p className="text-lg"> {user?.pseudo || 'Anonyme'}</p>
              </div>
            </div>
          )}
          
          {/* Pages */}
          {currentPage > 0 && (
            <motion.div 
              className="absolute inset-0 bg-white transform-style-preserve-3d transform-origin-left"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: currentPage * -180 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center backface-hidden">
                <h2 className="text-2xl font-serif text-orange-800 mb-4">{recipes[currentPage - 1]?.title}</h2>
                <p className="text-gray-600">{recipes[currentPage - 1]?.description}</p>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center backface-hidden transform rotate-y-180">
                <h2 className="text-2xl font-serif text-orange-800 mb-4">{recipes[currentPage]?.title}</h2>
                <p className="text-gray-600">{recipes[currentPage]?.description}</p>
              </div>
            </motion.div>
          )}
        </div>
        
        <button 
          onClick={nextPage} 
          className="bg-orange-500 text-white px-4 py-2 rounded-full" 
          disabled={currentPage >= recipes.length}
        >
          Page suivante &#8594;
        </button>
      </div>

      {/* Version mobile */}
      <div className="md:hidden">
        {currentPage === 0 ? (
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 clip-cover p-8 rounded-lg shadow-lg text-white text-center">
            <Logo />
            <h1 className="text-4xl font-serif mb-4">Bienvenue dans Mon Livre de Cuisine</h1>
            <p className="text-lg">Par {user?.pseudo || 'Anonyme'}</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
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
                disabled={currentPage >= recipes.length}
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
