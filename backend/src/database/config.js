require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB...`);
    
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eo76lnd.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`Connected to MongoDB: cooking-book`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
