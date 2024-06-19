import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../../api'; // Change this line to use named import

const SignUp = () => {
  const defaultValues = {
    pseudo: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    pseudo: yup.string().required('Pseudo est requis'),
    email: yup.string().email('Email invalide').required('Email est requis'),
    password: yup.string().required('Mot de passe est requis'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { pseudo, email, password } = data;
    signUp(pseudo, email, password) 
      .then((response) => {
        toast.success('Inscription réussie !');
        console.log(response);
      })
      .catch((error) => {
        toast.error('Erreur lors de l\'inscription');
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Rejoignez notre communauté culinaire</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Pseudo</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Votre pseudo"
              {...register('pseudo')}
            />
            {errors.pseudo && <p className="text-red-500 text-sm mt-1">{errors.pseudo.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="JpLmZ@example.com"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Mot de passe"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          >
            S'inscrire
          </button>
        </form>
        <p className="text-center mt-4">
          Vous avez déjà un compte ?  
          <Link to="/login" className="text-red-500 font-bold hover:underline transition duration-200 ml-2">
            Se connecter
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
