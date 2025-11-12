const express = require("express");
const router = express.Router();
const db = require("../db");

// POST: Save story
router.post("/", (req, res) => {
  const { content, category } = req.body;
  const sql = "INSERT INTO stories (content, category) VALUES (?, ?)";
  db.query(sql, [content, category], (err, result) => {
    if (err) return res.status(500).json({ message: "Failed to save story" });
    res.json({ id: result.insertId, content, category, created_at: new Date() });
  });
});

// GET: Fetch stories
router.get("/", (req, res) => {
  const sql = "SELECT * FROM stories ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Failed to fetch stories" });
    res.json(results);
  });
});

// DELETE: Delete story by ID
router.delete("/:id", (req, res) => {
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

module.exports = router;