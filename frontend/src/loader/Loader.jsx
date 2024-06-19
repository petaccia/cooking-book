// Loader.jsx
import { getCurrentUser } from '../api/authApi';

export const Loader = async () => {
  try {
    const user = await getCurrentUser();
    return { user } ;
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error);
    throw error;
  }
};
