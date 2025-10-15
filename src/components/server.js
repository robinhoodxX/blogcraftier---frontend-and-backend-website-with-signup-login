const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // to serve uploaded files

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "", // your MySQL password
  database: "myapp",   // your database name
});

// Connect to database warning handling
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // stop server
  }
  console.log("Connected to MySQL database");
});

// Function to get next folder number
const getNextFolder = () => {
  const basePath = "uploads";
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }
  const folders = fs.readdirSync(basePath).filter(f => fs.statSync(path.join(basePath, f)).isDirectory());
  const nextNum = folders.length + 1;
  const nextFolder = path.join(basePath, nextNum.toString());
  if (!fs.existsSync(nextFolder)) {
    fs.mkdirSync(nextFolder);
  }
  return nextFolder;
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = getNextFolder();
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g. 1696589293.jpg
  },
});

const upload = multer({ storage });


// Register (Signup)
app.post("/signup", upload.single("profile_pic"), async (req, res) => {
  const { fullName, username, email, password } = req.body;

  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if user already exists
    const existingUser = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ? OR username = ?",
        [email, username],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });

    // FIX: check if array has any rows
    if (existingUser.length > 0) {
      return res.status(400).json({
        error: "User already exists with this email or username.",
      });
    }

    const profilePicPath = req.file ? `/uploads/${req.file.filename}` : null;

    // Insert new user
    db.query(
      "INSERT INTO users (fullName, username, email, password, profile_pic) VALUES (?, ?, ?, ?, ?)",
      [fullName, username, email, password, profilePicPath],
      function (err) {
        if (err) {
          console.error("Database error:", err.message);
          return res.status(500).json({ error: "Database error." });
        }
        res.status(201).json({ message: "User created successfully!" });
      }
    );
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const users = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    // Check if user exists
    if (users.length === 0) {
      return res.status(400).json({ error: "User not found." });
    }

    const user = users[0]; // Get the first (and only) result

    // Direct password comparison (plain text)
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid password." });
    }

    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});



// Update profile API
app.put("/api/users/:id", upload.single("profile_pic"), (req, res) => {
  const { id } = req.params;
  const { username, email, password, mobile, address, gender } = req.body;
  let profile_pic = req.file ? `/uploads/${req.file.filename}` : null;

  const sql = `
    UPDATE users
    SET username = ?, email = ?, password = ?, mobile = ?, address = ?, gender = ?,
        profile_pic = COALESCE(?, profile_pic)
    WHERE id = ?
  `;

  db.query(sql, [username, email, password, mobile, address, gender, profile_pic, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: "Profile updated successfully" });
  });
});

// GET all users
app.get("/api/users", (req, res) => {
  const sql = "SELECT id, username, email, mobile, address, gender, profile_pic FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET user profile by ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, username, email, password, mobile, address, gender, profile_pic FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result[0]);
  });
});

// Debug endpoint to check password hash
app.get("/api/debug/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, username, email, password, LENGTH(password) as password_length FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result[0]);
  });
});

// DELETE user by ID
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  });
});

// Update user gender
app.put("/api/users/:id/gender", (req, res) => {
  const { id } = req.params;
  const { gender } = req.body;

  if (!gender) {
    return res.status(400).json({ success: false, message: "Gender is required" });
  }

  db.query("UPDATE users SET gender = ? WHERE id = ?", [gender, id], function (err) {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true, message: "Gender updated successfully" });
  });
});

// POST: Save story
app.post("/api/stories", (req, res) => {
  const { content, category } = req.body;
  const sql = "INSERT INTO stories (content, category) VALUES (?, ?)";
  db.query(sql, [content, category], (err, result) => {
    if (err) return res.status(500).json({ message: "Failed to save story" });
    res.json({ id: result.insertId, content, category, created_at: new Date() });
  });
});

// GET: Fetch stories
app.get("/api/stories", (req, res) => {
  const sql = "SELECT * FROM stories ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Failed to fetch stories" });
    res.json(results);
  });
});

// DELETE: Delete story by ID
app.delete("/api/stories/:id", (req, res) => {
  const storyId = req.params.id;
  const query = "DELETE FROM stories WHERE id = ?";

  db.query(query, [storyId], (err, result) => {
    if (err) {
      console.error("Error deleting story:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Story not found" });
    }

    res.json({ success: true, message: "Story deleted successfully" });
  });
});







// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
