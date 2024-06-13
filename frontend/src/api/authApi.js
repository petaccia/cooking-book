import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

export const signUp = async (pseudo, email, password) => {
  try {
    const response = await axios.post(`${UrlBack}/auth/signup`, {
      pseudo,
      email,
      password,
    });
    if (response.data !== null && response.data !== undefined && response.data !== "" && response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log('Une erreur est survenue pour la création de l\'utilisateur :', error);
    throw new Error('Une erreur vient du serveur :', error);
  }
};
