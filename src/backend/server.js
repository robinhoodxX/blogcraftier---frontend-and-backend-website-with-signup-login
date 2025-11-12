const express = require("express");
const cors = require("cors");
const path = require("path");



const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, '..', '..', "uploads"))); // to serve uploaded files

// Database connection is handled in db.js (e.g., MongoDB, PostgreSQL).

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const storyRoutes = require("./routes/stories");


app.use("/api/auth", authRoutes); // login/signup routes
app.use("/api/users", userRoutes); // user profile routes
app.use("/api/stories", storyRoutes); // story routes


// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
