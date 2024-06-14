const mongoose = require("mongoose");

// schema pour l'utilisateurs
const userSchema = new mongoose.Schema({

    // champs du pseudo
    pseudo: {
        type: String,
        required: function() {
            return !this.googleId; // si googleId n'est pas renseigné, alors le pseudo est obligatoire
        },
        unique: true,
    },

    // champs du nom
    name: {
        type: String,
    },

    // champs de l'email
    email: {
        type: String,
        required: true,
        unique: true,
    },

    // champs du mot de passe
    password: {
        type: String,
        required: function() {
            return !this.googleId; // si googleId n'est pas renseigné, alors le mot de passe est obligatoire
        },
    },

    // champs de l'image
    image: {
        type: String,
    },

    // champs googleId
    googleId: {
        type: String,
        unique: true,
    },

    // champs de l'adresse
    address: [
        { 
            address: {
                type: String,
                trim: true,
            },
            city: {
                type: String,
                trim: true,
            },
            postalCode: {
                type: String,
                trim: true,
            },
            country: {
                type: String,
                trim: true,
            }, 
            
            phoneNumber: {
                type: String,
                trim: true,
            }, 
        }

    ],

    // date de création
    createdAt: {
        type: Date,
        default: Date.now, // date actuelle
    },  
    
},
{
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// require : true pour dire que le champ est obligatoire