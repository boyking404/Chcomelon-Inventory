const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS setup
app.use(
  cors({
    origin: ["https://chcomelon-inventory-website.vercel.app"], // Allow this origin
    credentials: true, // Allow credentials to be passed in CORS
  })
);

// Serve static files (for file uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route Middleware
app.use("/api/users", userRoute); // User-related routes
app.use("/api/products", productRoute); // Product-related routes
app.use("/api/contactus", contactRoute); // Contact-related routes

// Base route (homepage)
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error handling middleware (should be placed after routes)
app.use(errorHandler);

// MongoDB connection and server start
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MongoDB URI is not defined in environment variables");
  process.exit(1); // Exit with error code if URI is missing
}

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Start the server only after successful DB connection
    app.listen(3000, () => {
      console.log("Server is running on port 3000 (handled by Vercel)");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with error code if connection fails
  });