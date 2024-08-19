// FormCreateRecipe.jsx

// Importation des librairies
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipeApi } from "../../../../../api";
import { UserContext } from "../../../../../contexts/UserContext";
import { toast } from "react-toastify";

// Importation des composants
import schemaValidationCreateRecipe from "./validationCreateRecipe/ValidationCreateRecipe";
import FormRecipe from "../../components/FormRecipe/FormRecipe";
import ErrorMessage from "../../../../../components/Error/errorMessage/ErrorMessage";


const FormCreateRecipe = () => {
  const { user } = useContext(UserContext);

  const [formState, setFormState] = useState({
    ingredients: [],
    selectedIngredients: [],
    steps: [],
    error: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationCreateRecipe),
  });
  console.log("errors :", errors);

  const onSubmit = async (data) => {
    if (!user || !user._id) {
      toast.error("Utilisateur non connecté.");
      return;
    }
  
    if (formState.selectedIngredients.length === 0) {
      toast.error("Veuillez sélectionner au moins un ingrédient.");
      return;
    }
  
    if (formState.steps.length === 0) {
      toast.error("Veuillez ajouter au moins une étape.");
      return;
    }
  
    const recipeData = {
      ...data,
      title: data.title,
      image: data.image,
      tcookingTime: data.cookingTime,
      ingredients: formState.selectedIngredients.map((ing) => ({
        _id: ing._id,
      })),
      steps: formState.steps,
      creator: [user._id],
    };
  
    try {
      await createRecipeApi(recipeData);
      toast.success("Recette créée avec succès !");
    } catch (err) {
      console.error("Erreur lors de la création de la recette :", err.response || err.message);
      toast.error(`${err.response?.data.message || err.message}`);
    }
  };

  
  return (
    <div className="max-w-4xl mx-auto bg-orange-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
        Créer une nouvelle recette
      </h2>
      <ErrorMessage message={formState.error} />
      <FormRecipe 
        onSubmit={onSubmit} 
        handleSubmit={handleSubmit} 
        register={register} 
        errors={errors} 
        formState={formState} 
        setFormState={setFormState} 
      />
    </div>
  );
};

export default FormCreateRecipe;
