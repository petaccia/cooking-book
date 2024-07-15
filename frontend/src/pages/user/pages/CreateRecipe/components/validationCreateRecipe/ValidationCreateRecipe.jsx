import * as yup from 'yup';

const schemaValidationCreateRecipe = yup.object().shape({
  title: yup.string().required('Le titre est obligatoire'),
  description: yup.string().required('La description est obligatoire'),
  image: yup.string().url('Entrez une URL valide').required('L\'image est obligatoire'),
  tcookingTime: yup.number().positive('Le temps doit être positif').required('Le temps de cuisson est obligatoire'),
  level: yup.string().oneOf(['Facile', 'Moyen', 'Difficile'], 'Choisissez un niveau valide').required('Le niveau est obligatoire'),
});

export default schemaValidationCreateRecipe;