const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb+srv://admin:admin@jasoos.caxoj.mongodb.net/?retryWrites=true&w=majority&appName=Jasoos/imageDB";

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();

module.exports = mongoose;
