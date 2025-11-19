
import { useState } from 'react';
import { Box, Button, Typography, Paper, TextField, Alert } from "@mui/material";
import axios from 'axios'; // Make sure axios is installed
import Navbar from "../navbar/navbar.jsx";

function Stw({ onStorySubmit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !category.trim() || !story.trim()) {
      setError("Title, Category, and Story fields cannot be empty.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/stories", {
        title,
        content: story,
        category: category || "General",
        keywords,
        createdAt: new Date(),
      });

      setIsLoading(false);
      setSuccess(true);
      setStory("");
      setTitle("");
      setCategory("");
      setKeywords("");

      if (onStorySubmit) onStorySubmit(response.data); // Optional: update homepage

    } catch (err) {
      setIsLoading(false);
      console.error(err);
      setError("Failed to submit story. Try again later.");
    }
  };



  return (
    <Box>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content desktop screen */}
      <Box sx={{ width: "100%", margin: "auto", mt: 12 }}>
        <Paper sx={{ display: "flex", flexDirection: "column", width: "95%", margin: "auto", pt: 1, pb: 2, mb: 3, mt: 3, borderRadius: 5  }}>
          <Typography variant="h5" align="center" sx={{ mt: 10, mb: 2 }}>
            Start Writing Your Story
          </Typography>

          {/* Error & Success Messages */}
          {error && (
            <Alert severity="error" sx={{ width: "90%", margin: "auto", mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ width: "90%", margin: "auto", mb: 2 }}>
              Story submitted successfully!
            </Alert>
          )}

          {/* Title Input */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2, width: '90%' }}
            />
          </Box>

          {/* Category Input */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ mb: 2, width: '90%' }}
            />
          </Box>

          {/* Keywords Input */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <TextField
              label="Keywords"
              variant="outlined"
              fullWidth
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              sx={{ mb: 2, width: '90%' }}
            />
          </Box>

          {/* Text Area */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
            <TextField
              label="Write your story here..."
              variant="outlined"
              fullWidth
              multiline
              minRows={10}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              sx={{
                mb: 2,
                width: '90%',
                '& .MuiInputBase-root': {
                  minHeight: '300px',
                  alignItems: 'flex-start',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }
              }}
            />
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Stw;

