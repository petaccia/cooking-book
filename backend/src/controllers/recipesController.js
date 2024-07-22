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
        populate: [
          { path: 'category', select: 'name' }, // Peupler les détails des catégories
          { path: 'type', select: 'name' } // Peupler les détails des types
        ],
        select: 'name image category type' // Sélectionner les champs nécessaires
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

// Mettre à jour une recette
exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, tcookingTime, level, ingredients, steps } = req.body;

    console.log("ID de la recette à mettre à jour:", id);
    console.log("Données de la requête:", { title, description, image, tcookingTime, level, ingredients, steps });

    const update = {};

    // Vérifier si la recette existe
    const existingRecipe = await Recipes.findById(id);
    if (!existingRecipe) {
      console.log("Recette non trouvée");
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    console.log("Recette existante:", existingRecipe);

    // Vérifier si le titre de la recette est différent de la recette existante
    if (existingRecipe.title !== title) {
      // Vérifier si un autre recette avec le même titre existe
      const recipeWithSameTitle = await Recipes.findOne({ title });
      if (recipeWithSameTitle) {
        console.log("Titre de la recette existe déjà");
        return res.status(400).json({ message: "Titre de la recette existe déjà" });
      }
      update.title = title;
    }

    // Vérifier si l'image de la recette est différente de la recette existante
    if (existingRecipe.image !== image) {
      update.image = image;
    }

    // Vérifier si le temps de cuisson de la recette est différent de la recette existante
    if (existingRecipe.tcookingTime !== tcookingTime) {
      update.tcookingTime = tcookingTime;
    }

    // Vérifier si le niveau de la recette est différent de la recette existante
    if (existingRecipe.level !== level) {
      update.level = level;
    }

    // Vérifier si les ingrédients de la recette sont différents de la recette existante
    if (JSON.stringify(existingRecipe.ingredients) !== JSON.stringify(ingredients)) {
      update.ingredients = ingredients;
    }

    // Vérifier si les étapes de la recette sont différentes de la recette existante
    if (JSON.stringify(existingRecipe.steps) !== JSON.stringify(steps)) {
      update.steps = steps;
    }

    // Vérifier si la description de la recette est différente de la recette existante
    if (existingRecipe.description !== description) {
      update.description = description;
    }

    console.log("Mises à jour détectées:", update);

    // Mettre à jour la recette si des changements ont été détectés
    if (Object.keys(update).length > 0) {
      const updatedRecipe = await Recipes.findByIdAndUpdate(id, update, { new: true });
      console.log("Recette mise à jour:", updatedRecipe);
      res.status(200).json({ message: "Recette mise à jour avec succès", recipe: updatedRecipe });
    } else {
      console.log("Aucun changement détecté");
      res.status(400).json({ message: "Aucun changement détecté" });
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la recette:", error);
    res.status(500).json({ message: "Erreur lors de la mise à jour de la recette", error: error.message });
  }
};
