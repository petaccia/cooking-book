import axios from "axios";

const UrlBack = import.meta.env.VITE_BACK_URL;

export const signup = async () => {
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
  }
  finally {
    console.log('Fin de la création de l\'utilisateur')
  }
};
