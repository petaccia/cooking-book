import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import BookCover from './components/BookCover/BookCover';
import HTMLFlipBook from 'react-pageflip';
import { getFavoriteRecipes } from '../../../../api';

const MyBookCook = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      if (user) {
        try {
          setIsLoading(true);
          const favoriteRecipes = await getFavoriteRecipes(user._id);
          setRecipes(favoriteRecipes.map(fav => fav.recipe));
        } catch (error) {
          console.error('Erreur lors du chargement des recettes favorites:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchFavoriteRecipes();
  }, [user]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen-lg py-8 ">
      <HTMLFlipBook 
        width={280}
        height={450}
        size="stretch"
        minWidth={250}
        maxWidth={400}
        minHeight={400}
        maxHeight={550}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className=""
      >
        <div className="page cover">
          <BookCover user={user} />
        </div>
        {recipes.map((recipe, index) => (
          <div key={recipe._id || index} className="page bg-orange-100">
            <div className="bg-beige p-5 h-full overflow-y-auto">
              <h2 className="text-2xl font-serif text-orange-800 mb-3">{recipe.title}</h2>
              <p className="text-base text-gray-600">{recipe.description}</p>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default MyBookCook;