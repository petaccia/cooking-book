import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

export const getAllTypes = async () => {
  try {
    const response = await axios.get(`${UrlBack}/types/all`);
    console.log("Récupération des types :", response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des types :", error);
    throw new Error("Une erreur est survenue : ", error);
  }
};