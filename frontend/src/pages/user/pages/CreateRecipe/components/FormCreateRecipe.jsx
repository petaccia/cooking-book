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
import SelectCookingTime from "./selectFormCreateRecipe/SelectCookingTime";
import SelectLevel from "./selectFormCreateRecipe/SelectLevel";
import InputTitle from "./inputFormCreateRecipe/InputTitle";
import InputImage from "./inputFormCreateRecipe/InputImage";
import InputSteps from "./inputFormCreateRecipe/InputSteps";
import SelectIngredients from "./selectedIngredient/SelectIngredients";
import TextareaDescription from "./TextareaDescription";

// Gestion des messages d'erreurs
const ErrorMessage = ({ message }) =>
  message && <p className="text-red-600 mb-4">{message}</p>;

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
      setFormState((errstate) => ({
        ...errstate,
        error: "Utilisateur non connecté.",
      }));
      toast.error("Utilisateur non connecté.");
      return;
    }

    if (formState.selectedIngredients.length === 0) {
      setFormState((errstate) => ({
        ...errstate,
        error: "Veuillez sélectionner au moins un ingrédient.",
      }));
      toast.error("Veuillez sélectionner au moins un ingrédient.");
      return;
    }

    if (formState.steps.length === 0) {
      setFormState((errstate) => ({
        ...errstate,
        error: "Veuillez ajouter au moins une étape.",
      }));
      toast.error("Veuillez ajouter au moins une étape.");
      return;
    }

    const recipeData = {
      ...data,
      title: data.title,
      tcookingTime: data.cookingTime,
      ingredients: formState.selectedIngredients.map((ing) => ({
        _id: ing._id,
      })),
      steps: formState.steps,
      creator: user._id,
    };
    console.log("recipeData :", recipeData);
    try {
      await createRecipeApi(recipeData);
      toast.success("Recette créée avec succès !");
    } catch (err) {
      console.error("Erreur lors de la création de la recette :", err.response || err.message);
      setFormState((errstate) => ({
        ...errstate,
        error: "Impossible de créer la recette. Veuillez réessayer plus tard.",
      }));
      toast.error(`${err.response?.data.message || err.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-orange-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
        Créer une nouvelle recette
      </h2>
      <ErrorMessage message={formState.error} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputTitle register={register} errors={errors} />
          <InputImage register={register} errors={errors} />
        </div>
        <TextareaDescription register={register} errors={errors} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectCookingTime register={register} errors={errors} />
          <SelectLevel register={register} errors={errors} />
        </div>
        <SelectIngredients
          register={register}
          selectedIngredients={formState.selectedIngredients}
          setSelectedIngredients={(selectedIngredients) =>
            setFormState((prevState) => ({ ...prevState, selectedIngredients }))
          }
        />
        <InputSteps
          register={register}
          errors={errors}
          steps={formState.steps}
          setSteps={(steps) =>
            setFormState((prevState) => ({ ...prevState, steps }))
          }
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
          onClick={() => console.log("Bouton cliqué")}
        >
          Creer la recette
        </button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;
