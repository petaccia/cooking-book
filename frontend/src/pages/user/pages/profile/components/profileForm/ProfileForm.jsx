import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../../../contexts/UserContext';

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
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Informations personnelles</h2>

      <div className="flex flex-wrap -mx-2">
        {/* Pseudo */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="pseudo" className="block text-gray-700 font-bold mb-2">
            Pseudo
          </label>
          <input
            id="pseudo"
            type="text"
            {...register('pseudo')}
            className={`w-full p-2 border border-gray-300 rounded ${errors.pseudo ? 'border-red-500' : ''}`}
          />
          {errors.pseudo && <p className="text-red-500 text-sm mt-1">{errors.pseudo.message}</p>}
        </div>

        {/* Nom */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nom
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full p-2 border border-gray-300 rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="w-full px-2 mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full p-2 border border-gray-300 rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Adresse */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2 text-orange-600">Adresse</h3>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
              Adresse
            </label>
            <input
              id="address"
              type="text"
              {...register('address.address')}
              className={`w-full p-2 border border-gray-300 rounded ${errors.address?.address ? 'border-red-500' : ''}`}
            />
            {errors.address?.address && <p className="text-red-500 text-sm mt-1">{errors.address.address.message}</p>}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
              Ville
            </label>
            <input
              id="city"
              type="text"
              {...register('address.city')}
              className={`w-full p-2 border border-gray-300 rounded ${errors.address?.city ? 'border-red-500' : ''}`}
            />
            {errors.address?.city && <p className="text-red-500 text-sm mt-1">{errors.address.city.message}</p>}
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
              Code postal
            </label>
            <input
              id="postalCode"
              type="text"
              {...register('address.postalCode')}
              className={`w-full p-2 border border-gray-300 rounded ${errors.address?.postalCode ? 'border-red-500' : ''}`}
            />
            {errors.address?.postalCode && <p className="text-red-500 text-sm mt-1">{errors.address.postalCode.message}</p>}
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
              Pays
            </label>
            <input
              id="country"
              type="text"
              {...register('address.country')}
              className={`w-full p-2 border border-gray-300 rounded ${errors.address?.country ? 'border-red-500' : ''}`}
            />
            {errors.address?.country && <p className="text-red-500 text-sm mt-1">{errors.address.country.message}</p>}
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
              Numéro de téléphone
            </label>
            <input
              id="phoneNumber"
              type="tel"
              {...register('address.phoneNumber')}
              className={`w-full p-2 border border-gray-300 rounded ${errors.address?.phoneNumber ? 'border-red-500' : ''}`}
            />
            {errors.address?.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.address.phoneNumber.message}</p>}
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
