import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  loginWithGoogle } from '../../../api';
import { UserContext} from '../../../contexts/UserContext';

const Login = () => {
  const { login } = useContext(UserContext);
  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email('Email invalide').required('Email est requis'),
    password: yup.string().required('Mot de passe est requis'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (credentials) => {
    console.log("Cookies avant la connexion :", document.cookie);
    try {
      const response = await login(credentials);
      console.log("reponse du serveur :", response);
      console.log(response);
      navigate('/');
    } catch (error) {
      toast.error('Erreur lors de la connexion');
      console.log(error);
    }
  };

  const handleLoginGoogle =  async () => {
    try {
      const response = await loginWithGoogle();
      toast.success('Connexion Google établie !');
      console.log(response);
      navigate('/');
    } catch (error) {
      toast.error('Erreur lors de la connexion Google');
      console.log(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Se connecter
          </button>
        </form>
        <button
          className="relative flex items-center justify-center px-4 py-2 mt-4 overflow-hidden font-bold text-white bg-red-500 rounded-lg shadow-lg group"
          onClick={handleLoginGoogle}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.9 12.19,19.9C8.36,19.9 5,16.6 5,12.71C5,8.81 8.36,5.52 12.19,5.52C14.66,5.52 16.8,6.92 18.09,8.85L20.53,6.56C18.37,4.05 15.22,2.5 12.19,2.5C6.47,2.5 2.06,6.91 2.06,12.71C2.06,18.52 6.47,22.92 12.19,22.92C17.92,22.92 22.35,18.52 22.35,12.71C22.35,11.92 22.28,11.16 22.15,10.43L21.35,11.1Z"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">
            Google
          </span>
          <span className="relative invisible">Google</span>
        </button>
        <p className="text-center mt-4">
          Vous n'avez pas de compte ?
          <Link to="/signup" className="text-red-500 font-bold hover:underline transition duration-200 ml-2">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>

  );
};

export default Login;
