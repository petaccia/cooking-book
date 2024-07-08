import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRecipeApi } from '../../../../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../../../../contexts/UserContext';
import schemaValidationCreateRecipe from './components/validationCreateRecipe/ValidationCreateRecipe';
import SelectCookingTime from './components/select/selectTCookIngTime/SelectCookingTime';
import SelectLevel from './components/select/selectLevel/SelectLevel';
import InputTitle from './components/inputs/inputTitle/InputTitle';
import InputImage from './components/inputs/inputImage/InputImage';
import InputSteps from './components/inputs/inputSteps/InputSteps';
import SelectIngredients from './components/select/selectIngredients/SelectIngredients';
import TextareaDescription from './components/textarea/TextareaDescription';


// Définir le schéma de validation avec yup

const FormCreateRecipe = () => {
  const { user } = useContext(UserContext);
  console.log("user in FormCreateRecipe :", user);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState(null);

  // Initialiser les fonctions du formulaire avec react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidationCreateRecipe),
  });


  // Gérer la soumission du formulaire
  const onSubmit = async (data) => {
    if (!user || !user._id) {
      setError("Utilisateur non connecté.");
      return;
    }

    if (selectedIngredients.length === 0) {
      setError("Veuillez sélectionner au moins un ingrédient.");
      return;
    }
    if (steps.length === 0) {
      setError("Veuillez ajouter au moins une étape.");
      return;
    }

    const recipeData = {
      ...data,
      ingredients: selectedIngredients.map(ing => ({ _id: ing._id })),  // Vérifiez que les IDs sont correctement extraits
      steps: steps,
      creator: user._id,
    };

    try {
      await createRecipeApi(recipeData);
      console.log('Recette créée avec succès !');
    } catch (err) {
      console.error("Erreur lors de la création de la recette", err);
      setError("Impossible de créer la recette. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-orange-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">Créer une nouvelle recette</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputTitle register={register} errors={errors} />
          <InputImage register={register} errors={errors} />
        </div>

        <TextareaDescription register={register} errors={errors} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectCookingTime
            register={register}
            errors={errors}
          />

          <SelectLevel register={register} errors={errors} />
        </div>

        <SelectIngredients register={register} errors={errors} ingredients={ingredients} setIngredients={setIngredients} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
          <InputSteps register={register} errors={errors} steps={steps} setSteps={setSteps} />
        <div>
          <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Créer la recette
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
