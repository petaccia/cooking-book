const Recipes = require("../models/recipeModel");
const Ingredients = require("../models/ingredients/ingredientModel");

// Récupérer toutes les recettes
exports.getRecipes = async (req, res) => {
  try {
    const recipesAll = await Recipes.find();
    res.status(200).json(recipesAll);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Récupérer une recette par son id
exports.getRecipeById = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipes.findById(id)
      .select("-__v") // Supprimer le champ __v de la réponse
      .populate({
        path: 'ingredients.ingredientId', // Peupler les détails des ingrédients
        select: 'name image' // Sélectionner les champs nécessaires
      })
      .populate('author', 'name'); // Peupler les détails de l'auteur

    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de la recette", error: error.message });
  }
};

// Ajouter une nouvelle recette
exports.addRecipe = async (req, res) => {
  try { 
    const {
      title,
      description,
      image,
      tcookingTime,
      level,
      ingredients,
      steps
    } = req.body;
    console.log("Données de la recette :", req.body);
    console.log("req.user dans addRecipe:", req.user);
    // Validation des champs requis
    const requiredFields = ['title', 'image', 'tcookingTime', 'level', 'ingredients', 'steps'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({ message: `Champs manquants : ${missingFields.join(', ')}` });
    }

    // Vérifications supplémentaires
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ message: "Données d'ingrédients invalides ou manquantes" });
    }

    if (!['Facile', 'Moyen', 'Difficile'].includes(level)) {
      return res.status(400).json({ message: "Niveau invalide" });
    }

    if (!Array.isArray(steps) || steps.length === 0) {
      return res.status(400).json({ message: "Étapes de la recette invalides ou manquantes" });
    }

    // Vérification de l'authentification
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Veuillez vous connecter pour ajouter une recette" });
    }

    console.log("ID de l'utilisateur :", req.user.id);

    // Vérification des ingrédients
    const verifiedIngredients = await Promise.all(
      ingredients.map(async (ingredient) => {
        if (!ingredient.ingredientId) {
          throw new Error("ID d'ingrédient manquant");
        }
        const foundIngredient = await Ingredients.findById(ingredient.ingredientId);
        if (!foundIngredient) {
          throw new Error(`Ingrédient non trouvé: ${ingredient.ingredientId}`);
        }
        return { ingredientId: foundIngredient._id };
      })
    );

    // Création de la nouvelle recette
    const newRecipe = new Recipes({
      title,
      description,
      image,
      tcookingTime,
      level,
      author: req.user._id,
      ingredients: verifiedIngredients,
      steps,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la recette:", error);
    if (error.code === 11000) {
      return res.status(409).json({ message: "Recette existante" });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Données de recette invalides", details: error.message });
    } 
    res.status(500).json({ message: "Erreur lors de l'ajout de la recette", error: error.message });
  } 
};