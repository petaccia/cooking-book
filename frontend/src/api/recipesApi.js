import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;


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

export const getRecipeById = async (id) => {
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