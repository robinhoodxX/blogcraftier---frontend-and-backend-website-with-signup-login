const express = require("express");
const router = express.Router();
const db = require("../db");
const upload = require("../updflrmiddleware/upload");
const bcrypt = require("bcrypt");

// GET all users
router.get("/", (req, res) => {
  const sql = "SELECT id, username, email, mobile, address, gender, profile_pic FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET user profile by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, username, email, password, mobile, address, gender, profile_pic FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result[0]);
  });
});

// Debug endpoint to check password hash
router.get("/debug/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, username, email, password, LENGTH(password) as password_length FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result[0]);
  });
});

// DELETE user by ID
router.delete("/:id", (req, res) => {
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
router.put("/:id/gender", (req, res) => {
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

// Update Password Route
router.put("/:id/password", async (req, res) => {
  const userId = req.params.id;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ error: "Both old and new passwords are required." });
  }

  try {
    // ⭐ Step 1: Find user by ID
    const users = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [userId], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    if (users.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const user = users[0];

    // ⭐ Step 2: Check if old password is correct
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect." });
    }

    // ⭐ Step 3: Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // ⭐ Step 4: Update new password in database
    await new Promise((resolve, reject) => {
      db.query(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, userId],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });

    res.status(200).json({ message: "Password updated successfully!" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Update profile API
router.put("/:id", upload.single("profile_pic"), async (req, res) => {
  const { id } = req.params;
  const { username, email, password, mobile, address, gender } = req.body;
  let profile_pic = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const fields = ["username = ?", "email = ?", "mobile = ?", "address = ?", "gender = ?", "profile_pic = COALESCE(?, profile_pic)"];
    const values = [username, email, mobile, address, gender, profile_pic];

    // Only hash and update password if provided
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      fields.splice(2, 0, "password = ?"); // insert password field before mobile
      values.splice(2, 0, hashedPassword);
    }

    const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
    values.push(id);

    db.query(sql, values, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: "Profile updated successfully", profile_pic_url: profile_pic ? profile_pic : null });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;