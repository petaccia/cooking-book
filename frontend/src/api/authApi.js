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
    console.log('Une erreur est survenue pour la création de l\'utilisateur :', error);
    throw new Error('Une erreur vient du serveur :', error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${UrlBack}/auth/login`, {
      email,
      password,
    }, {
      withCredentials: true,
    });
      return response.data;
  } catch (error) {
    console.log('Une erreur est survenue pour la connexion de l\'utilisateur :', error);
    throw new Error('Une erreur vient du serveur :', error);
  }
};

// Connexion avec Google
export const loginWithGoogle = () => {
  window.open(`${UrlBack}/auth/google`, '_self');
}

// Récupèrer les informations de l'utilisateur connecté
export const getCurrentUser = async () => {
  console.log("Connexion de l'utilisateur" );
  try {
    const response = await axios.get(`${UrlBack}/auth/currentUser`, {
      withCredentials: true,
    });
    console.log("Reponse du serveur pour la connexion dans l'api front", response.data);
      return response.data;
  } catch (error) {
    console.log('Une erreur est survenue pour la connexion de l\'utilisateur :', error);
    throw new Error('Une erreur vient du serveur :', error);
  }
};

// Déconnexion de l'utilisateur
export const logoutUser = async () => {
  try {
    const response = await axios.get(`${UrlBack}/auth/logout`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Une erreur de la response de la déconnexion :', response.status);
    }
  } catch (error) {
    console.log('Une erreur est survenue :', error);
    throw new Error('Une erreur est survenue du serveur :', error);
  }
};
     
    