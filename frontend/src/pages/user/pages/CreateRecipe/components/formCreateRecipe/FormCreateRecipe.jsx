import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAllIngredients, createRecipeApi } from '../../../../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faListUl, faPlus, faMinus, faListOl, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../../../../contexts/UserContext';
import schemaValidationCreateRecipe from './components/validationCreateRecipe/ValidationCreateRecipe';
import SelectCookingTime from './components/select/selectTCookIngTime/SelectCookingTime';
import SelectLevel from './components/select/selectLevel/SelectLevel';
import InputTitle from './components/inputTitle/InputTitle';
import InputImage from './components/inputImage/InputImage';
import InputSteps from './components/inputSteps/InputSteps';


// Définir le schéma de validation avec yup

const FormCreateRecipe = () => {
  const { user } = useContext(UserContext);
  console.log("user in FormCreateRecipe :", user);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [error, setError] = useState(null);

  // Initialiser les fonctions du formulaire avec react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidationCreateRecipe),
  });

  // Charger les ingrédients lors du premier rendu
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getAllIngredients();
        setIngredients(response);
      } catch (err) {
        console.error("Erreur lors de la récupération des ingrédients", err);
        setError("Impossible de charger les ingrédients. Veuillez réessayer plus tard.");
      }
    };
    fetchIngredients();
  }, []);

  // Gérer l'ajout des ingrédients sélectionnés
  const handleIngredientSelect = (event) => {
    const selectedId = event.target.value;
    const ingredient = ingredients.find(ing => ing._id === selectedId);
    if (ingredient && !selectedIngredients.some(ing => ing._id === selectedId)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  // Gérer la suppression des ingrédients sélectionnés
  const removeIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing._id !== id));
  };

  // Ajouter une étape à la liste des étapes

  // Filtrer les options d'ingrédients en fonction de ceux qui sont déjà sélectionnés
  const filteredIngredientOptions = ingredients
    .filter(ing => !selectedIngredients.some(selected => selected._id === ing._id))
    .map(ingredient => (
      <option key={ingredient._id} value={ingredient._id}>
        {ingredient.name}
      </option>
    ));


  // Convertir les étapes en éléments de liste

  // Convertir les ingrédients sélectionnés en éléments d'affichage
  const selectedIngredientsList = selectedIngredients.map(ingredient => (
    <div key={ingredient._id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={ingredient.image} alt={ingredient.name} className="w-24 h-24 object-cover rounded-full mb-2" />
      <p className="text-center text-sm font-medium">{ingredient.name}</p>
      <button
        type="button"
        onClick={() => removeIngredient(ingredient._id)}
        className="mt-2 text-red-600 hover:text-red-800 text-sm flex items-center"
      >
        <FontAwesomeIcon icon={faMinus} className="mr-1" />
        Retirer
      </button>
    </div>
  ));

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

        <div>
          <label htmlFor="description" className="flex items-center text-sm font-medium text-orange-700">
            <FontAwesomeIcon icon={faListUl} className="mr-2" />
            Description
          </label>
          <textarea {...register('description')} id="description" rows="3" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectCookingTime
            register={register}
            errors={errors}
          />

          <SelectLevel register={register} errors={errors} />
        </div>

        <div>
          <label htmlFor="ingredients" className="flex items-center text-sm font-medium text-orange-700">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Ajouter des ingrédients
          </label>
          <select
            onChange={handleIngredientSelect}
            className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          >
            <option value="">Sélectionnez un ingrédient</option>
            {filteredIngredientOptions}
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedIngredientsList}
        </div>
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
