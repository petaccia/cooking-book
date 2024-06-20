import * as yup from 'yup';


const SchemaFormProfile = yup.object().shape({
  pseudo: yup.string().required('Le pseudo est requis'),
  name: yup.string(),
  email: yup.string().email("L'email est invalide").required("L'email est requis"),
  address: yup.object().shape({
    address: yup.string(),
    city: yup.string(),
    postalCode: yup.string(),
    country: yup.string(),
    phoneNumber: yup.string(),
  }),
});


export default SchemaFormProfile;
