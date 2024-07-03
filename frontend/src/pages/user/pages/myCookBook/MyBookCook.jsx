import React, { useContext, useState, useEffect, useRef } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { getFavoriteRecipes } from '../../../../api';
import HTMLFlipBook from 'react-pageflip';
import BookCover from './components/BookCover/BookCover';
import BookRecipePage from './components/BookRecipePage/BookRecipePage';
import MobileRecipeCard from '../../../../components/utils/cards/MobileRecipeCard/MobileRecipeCard';
import BackCover from './components/BackCover/BackCover';

const MyBookCook = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const bookRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      if (user && user._id) {
        try {
          setIsLoading(true);
          const favoriteRecipes = await getFavoriteRecipes(user._id);
          setRecipes(favoriteRecipes.map(fav => fav.recipe));
        } catch (error) {
          console.error('Erreur lors du chargement des recettes favorites:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('Utilisateur non défini ou ID utilisateur manquant');
        setIsLoading(false);
      }
    };
    fetchFavoriteRecipes();
  }, [user]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  }

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-sepia-800">Mes Recettes Favorites</h1>
        {recipes && recipes.length > 0 ? (
          <div className="space-y-4">
            {recipes.map((recipe) => (
              <MobileRecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-cream-100 rounded-lg">
            <p className="text-lg text-sepia-800">Aucune recette favorite pour le moment.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-beige-100">
      <div className="w-full max-w-5xl">
        <HTMLFlipBook
          width={650}
          height={1000}
          size="stretch"
          minWidth={500}
          maxWidth={700}
          minHeight={700}
          maxHeight={1000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="recipe-book"
          ref={bookRef}
        >
          {/* page de couverture */}
          <div className="demoPage">
            <BookCover user={user} />
          </div>
          {/* page blanche (verso de la couverture) */}
          <div className="demoPage bg-orange-100 border-r-8 border-orange-50"></div>
          
          {/* page des recettes favorites */}
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div key={recipe._id || `recipe-${index}`} className="demoPage">
                <BookRecipePage recipe={recipe} />
              </div>
            ))
          ) : (
            <div className="demoPage">
              <div className="flex items-center justify-center h-full text-center p-4">
                <p className="text-xl text-sepia-800">Aucune recette favorite pour le moment.</p>
              </div>
            </div>
          )}


          {/* page de couverture (verso) */}
          <div className="demoPage">
            <BackCover user={user} />
          </div>
        </HTMLFlipBook>
      </div>
      
      <div className="mt-6 space-x-6">
        <button onClick={() => bookRef.current.pageFlip().flipPrev()} className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-base">Précédent</button>
        <button onClick={() => bookRef.current.pageFlip().flipNext()} className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-base">Suivant</button>
      </div>
    </div>
  );
};

export default MyBookCook;