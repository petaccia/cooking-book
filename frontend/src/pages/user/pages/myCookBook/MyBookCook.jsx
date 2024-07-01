import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import BookCover from './components/BookCover/BookCover';
import BookRecipePage from './components/BookRecipePage/BookRecipePage';
import HTMLFlipBook from 'react-pageflip';
import { getFavoriteRecipes } from '../../../../api';

const MyBookCook = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      if (user && user.id) {
        try {
          setIsLoading(true);
          const favoriteRecipes = await getFavoriteRecipes(user.id);
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

  return (
    <div className=" flex flex-col items-center justify-center  py-6">
      <HTMLFlipBook 
        width={450}
        height={750}
        size="stretch"
        minWidth={250}
        maxWidth={450}
        minHeight={400}
        maxHeight={750}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="recipe-book transform-gpu preserve-3d"
      >
        <div key="cover" className="page cover">
          <BookCover user={user} />
        </div>
        {recipes && recipes.length > 0 ? (
          recipes.map((fav, index) => (
            <div key={fav._id || `recipe-${fav.recipe.title}-${index}`} className="page bg-orange-100 shadow-inner">
              <BookRecipePage recipe={fav} />
            </div>
          ))
        ) : (
          <div key="no-recipes" className="page bg-beige-100">
            <div className="flex items-center justify-center h-full">
              <p>Aucune recette favorite pour le moment.</p>
            </div>
          </div>
        )}
      </HTMLFlipBook>
     <div className="book-spine absolute top-0 left-1/2 h-full w-10 -translate-x-1/2 pointer-events-none z-10 book-fold"></div>
    </div>
  );
};

export default MyBookCook;
