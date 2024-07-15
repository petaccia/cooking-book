import * as yup from 'yup';

const schemaValidationCreateRecipe = yup.object().shape({
  title: yup
    .string()
    .required('Le titre est obligatoire')
    .max(100, 'Le titre ne doit pas dépasser 100 caractères'),
  
  description: yup
    .string()
    .required('La description est obligatoire')
    .max(1000, 'La description ne doit pas dépasser 1000 caractères'),
  
  image: yup
    .string()
    .url('Entrez une URL valide')
    .required('L\'image est obligatoire'),
  
  cookingTime: yup
    .number()
    .positive('Le temps doit être positif')
    .max(1440, 'Le temps de cuisson ne peut pas dépasser 24 heures')
    .required('Le temps de cuisson est obligatoire'),
  
  level: yup
    .string()
    .oneOf(['Facile', 'Moyen', 'Difficile'], 'Choisissez un niveau valide')
    .required('Le niveau est obligatoire'),
});

export default schemaValidationCreateRecipe;