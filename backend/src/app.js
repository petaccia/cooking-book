// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const router = require("./routes");
const connectDB = require("./database/config");

// Importer Passport google
require("./passport/passportLogin");

const app = express();

// Connecter à la base de données
connectDB();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
}));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Configurer les sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

// Configurer Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(router);


module.exports = app;
