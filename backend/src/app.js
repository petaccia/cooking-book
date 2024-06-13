require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require('express-session');
const router = require("./routes");
const connectDB = require("./database/config");

// Importer Passport google
require("./passport/passportGoogle");

const app = express();


connectDB ();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Configurer les sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Configurer Passport
app.use(passport.initialize());
app.use(passport.session());


app.use(router);


module.exports = app;