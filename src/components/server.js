const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "", // your MySQL password
  database: "myapp",   // your database name
});

// Register (Signup)
app.post("/signup", async (req, res) => {
  const { fullName, username, email, password, confirmPassword } = req.body;

  if (!fullName || !username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Please provide all required fields." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (fullName, username, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [fullName, username, email, hashedPassword], (err, result) => {
      if (err) {
        // handle duplicate email gracefully
        if (err.code === "ER_DUP_ENTRY") return res.status(400).json({ error: "Email or username already exists." });
        return res.status(500).json({ error: "Database error" });
      }
      res.json({ message: "User registered successfully" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Database error during login:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: "User not found. Please check your email or sign up first." });
    }

    const user = results[0];
    try {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password. Please try again." });
      }
      res.json({ message: "Login successful", user });
    } catch (compareErr) {
      console.error("Error comparing passwords:", compareErr);
      res.status(500).json({ error: "Server error during password check" });
    }
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
