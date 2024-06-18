require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB ...`);
    
    await mongoose.connect(
      `mongodb+srv://sebastien:laure120784@cluster0.eo76lnd.mongodb.net/cooking-book?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`Connected to MongoDB: cooking-book`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
