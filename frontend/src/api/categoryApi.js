import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${UrlBack}/category/all`);
    console.log("Récupération des catégories :", response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    throw new Error("Une erreur est survenue : ", error);
  }
};