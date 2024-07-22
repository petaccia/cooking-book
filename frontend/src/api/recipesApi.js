import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

// Récupérer toutes les recettes

export const getAllRecipes = async () => {
  try{
    const response = await axios.get(`${UrlBack}/recipes`);
    console.log("toutes les recettes :",response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Une erreur est survenue :', response.status);
    } 
  } catch (error) {
    console.log('Une erreur est survenue :', error);
    throw new Error('Une erreur est survenue :', error);
  }
};

// Récupérer la recette par son id

export const getRecipeByIdApi = async (id) => {
  try{
    const response = await axios.get(`${UrlBack}/recipes/${id}`);
    console.log("recette par id :",response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Une erreur est survenue :', response.status);
    } 
  } catch (error) {
    console.log('Une erreur est survenue :', error);
    throw new Error('Une erreur est survenue :', error);
  }
};

// Créer une nouvelle recette

export const createRecipeApi = async (recipeData) => {
  console.log("Données soumises :", recipeData);
  try {
    const response = await axios.post(`http://localhost:3000/recipes/add/${recipeData.creator}`, recipeData, {
      withCredentials: true,  // Envoyer les cookies avec la requête
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la recette", error.response || error.message);
    throw error;  // Propagation de l'erreur pour la gestion dans le composant
  }
};

// Modifier une recette
export const updateRecipeApi = async (recipeData) => {
  console.log("Données soumises :", recipeData);
  try {
    const response = await axios.put(`${UrlBack}/recipes/${recipeData._id}/${recipe.creator}`, recipeData, {
    });
    console.log("recette mise à jour :",response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la recette", error.response || error.message);
    throw new Error('Une erreur est survenue :', error);  
  } 
}
// Récupérer les recettes favorites d'un utilisateur

export const getFavoriteRecipes = async (userId) => {
  try{
    const response = await axios.get(`${UrlBack}/recipes/favorites/${userId}`);
    console.log("recettes favorites :",response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Une erreur est survenue :', response.status);
    } 
  } catch (error) {
    console.log('Une erreur est survenue :', error);
    throw new Error('Une erreur est survenue :', error);
  }
}


// Ajouter une recette aux favoris d'un utilisateur

export const addFavoriteRecipe = async (userId, recipeId) => {
  try{
    const response = await axios.post(`${UrlBack}/recipes/favorites/${userId}`, {recipeId});
    console.log("recette ajoute aux favoris :",response);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('Une erreur est survenue :', response.status);
    }
  } catch (error) { 
    console.log('Une erreur est survenue :', error);
    throw new Error('Une erreur est survenue :', + error.response.data.message);
  }
}


// Supprimer une recette des favoris d'un utilisateur

export const deleteFavoriteRecipe = async (userId, recipeId) => {
  try {
    const response = await axios.delete(`${UrlBack}/recipes/favorites/${userId}/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du favori :', error);
    if (error.response) {
      throw new Error(error.response.data.message || 'Erreur lors de la suppression du favori');
    } else {
      throw new Error('Erreur de réseau lors de la suppression du favori');
    }
  }
};