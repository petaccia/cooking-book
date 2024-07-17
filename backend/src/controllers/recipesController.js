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
exports.createRecipe = async (req, res) => {
  try {
    // Extraire les données de la recette depuis le corps de la requête
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

    // Vérification du titre de la recette est unique
    const existingRecipe = await Recipes.findOne({ title });
    if (existingRecipe) {
      return res.status(400).json({ message: "Titre de la recette existe déjà , veuillez en choisir un autre" });
    }

    // Vérification de l'image de la recette est unique
    const existingImage = await Recipes.findOne({ image });
    if (existingImage) {
      return res.status(400).json({ message: "Image de la recette existe déjà , veuillez en choisir une autre" });
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

    console.log("ID de l'utilisateur :", req.user._id);

    // Vérification des ingrédients
    const ingredientIds = ingredients.map(ing => ing._id);  // Extraire les IDs des ingrédients
    if (ingredientIds.some(id => !id)) {
      return res.status(400).json({ message: "ID d'ingrédient manquant" });
    }

    // Requête pour vérifier les ingrédients en une seule fois
    const validIngredients = await Ingredients.find({ '_id': { $in: ingredientIds } });

    // Vérifiez que tous les ingrédients envoyés existent dans la base de données
    if (validIngredients.length !== ingredientIds.length) {
      return res.status(400).json({ message: 'Certains ingrédients sont invalides' });
    }

    // Création de la nouvelle recette
    const newRecipe = new Recipes({
      title,
      description,
      image,
      tcookingTime,
      level,
      author: req.user._id,
      ingredients: validIngredients.map(ingredient => ({ _id: ingredient._id })),  // Mettez à jour avec les ingrédients valides
      steps,
    });

    // Sauvegarde de la recette
    const savedRecipe = await newRecipe.save();
    res.status(201).json({message : "Recette ajoutée avec succès", recipe: savedRecipe});

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
