import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../../../../contexts/UserContext';
import Input from '../../../../../../components/form/input';

const schema = yup.object().shape({
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

const ProfileForm = () => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      setValue('pseudo', user.pseudo || '');
      setValue('name', user.name || '');
      setValue('email', user.email || '');
      setValue('address.address', user.address.length > 0 ? user.address[0].address : '');
      setValue('address.city', user.address.length > 0 ? user.address[0].city : '');
      setValue('address.postalCode', user.address.length > 0 ? user.address[0].postalCode : '');
      setValue('address.country', user.address.length > 0 ? user.address[0].country : '');
      setValue('address.phoneNumber', user.address.length > 0 ? user.address[0].phoneNumber : '');
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    // Logique pour envoyer les données du formulaire au serveur
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" p-6 mt-44 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Informations personnelles</h2>

      <div className="flex flex-wrap mx-4">
        {/* Pseudo */}
        <Input
          id="pseudo"
          label="Pseudo"
          register={register('pseudo')}
          error={errors.pseudo} />


        {/* Nom */}
        <Input
          id="name"
          label="Nom"
          register={register('name')}
          error={errors.name} />

        {/* Email */}
        <Input
          id="email"
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email} />

        {/* Adresse */}
        <div className="w-full px-4 mb-6 mt-4">
          <h3 className="text-lg font-bold mb-2 text-orange-600">Adresse</h3>
          <div className="flex flex-wrap -mx-4">

            {/* Adresse */} 
            <Input
              id="address"
              label="Adresse"
              register={register('address.address')}
              error={errors.address?.address} />

            {/* Ville */}
            <Input
              id="city"
              label="Ville"
              register={register('address.city')}
              error={errors.address?.city} />

            {/* Code postal */}
            <Input
              id="postalCode"
              label="Code postal"
              register={register('address.postalCode')}
              error={errors.address?.postalCode} />

            {/* Pays */}
            <Input
              id="country"
              label="Pays"
              register={register('address.country')}
              error={errors.address?.country} />

            {/* N° de téléphone */}
            <Input
              id="phoneNumber"
              label="N° de téléphone"
              register={register('address.phoneNumber')}
              error={errors.address?.phoneNumber} />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Mettre à jour
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
