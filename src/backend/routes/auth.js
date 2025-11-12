const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db/index");
const { signToken } = require("../utils/jwt");

// Register (Signup)
router.post("/signup", async (req, res) => {
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

    //  Hash password before saving
    const salt = await bcrypt.genSalt(10); //  generate salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user
    db.query(
      "INSERT INTO users (fullName, username, email, password) VALUES (?, ?, ?, ?)",
      [fullName, username, email, hashedPassword],
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
router.post("/login", async (req, res) => {
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
    //  Compare hashed password using bcrypt
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password." });
    }

    const token = signToken({ id: user.id, username: user.username, email: user.email });

    res.status(200).json({
      message: "Login successful!",
      token,  // JWT token
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

module.exports = router;