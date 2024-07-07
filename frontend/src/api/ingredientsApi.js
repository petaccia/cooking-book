import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

export const getAllIngredients = async () => {
  try {
    const response = await axios.get(`${UrlBack}/ingredients/all`);
    console.log('Récupération des ingrédients :', response);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des ingrédients :', error);
    throw new Error('Une erreur est survenue :', error);
  }
};