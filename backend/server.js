require('dotenv').config();
const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const connectDB = require("./src/database/config");

connectDB ();



const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("Aucune connexion au serveur", err);
  }
  console.log(`Serveur Backend sur le port : ${PORT}`);
});
module.exports = server;


