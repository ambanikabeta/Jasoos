const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const Image = require("./models/image");
require("./database");

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port

// Middleware
app.use(cors({
  origin: ["https://jasoos.onrender.com","https://www.jasoosesports.com"], // Replace with your frontend domain
  methods: ["GET", "POST", "DELETE"], // Allowed methods
}));
app.use(bodyParser.json());
app.use(express.json());

// Multer configuration for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes

// Fetch all images and descriptions
app.get("/images-with-descriptions", async (req, res) => {
  try {
    const data = await Image.find({}, 'image description'); // Selects only 'image' and 'description' fields
    res.json(data);
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Error fetching images with descriptions" });
  }
});

// Upload a new image
app.post("/images/upload", upload.single("image"), async (req, res) => {
  if (!req.file || !req.body.description) {
    return res.status(400).send("Both image and description are required");
  }

  try {
    const newImage = new Image({
      name: req.body.name || req.file.originalname, // Name of the image (optional)
      image: {
        data: req.file.buffer, // Binary data of the image
        contentType: req.file.mimetype, // MIME type of the image
      },
      description: req.body.description, // Description provided in the request body
    });

    await newImage.save(); // Save to MongoDB
    res.status(201).json({ message: "Image uploaded successfully", newImage });
  } catch (err) {
    console.error("Error saving image:", err);
    res.status(500).json({ error: "Error saving image" });
  }
});

// Delete an image
app.delete("/images/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the document by its ID
    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json({
      message: "Image and description deleted successfully",
      deletedImage,
    });
  } catch (err) {
    console.error("Error deleting image:", err);
    res.status(500).json({ error: "Error deleting image and description" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
