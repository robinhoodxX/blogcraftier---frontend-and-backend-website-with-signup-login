import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Typography, Paper, TextField, Alert } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'; // Make sure axios is installed

function Stw({ onStorySubmit }) {
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!story.trim()) {
      setError("Story cannot be empty");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/stories", {
        content: story,
        category: "General",
        createdAt: new Date(),
      });

      setIsLoading(false);
      setSuccess(true);
      setStory("");

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
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 22px",
            backgroundColor: "rgba(56, 56, 56, 0.8)",
            backdropFilter: "blur(8px)",
            color: "white",
            borderRadius: 4,
            marginTop: 2,
            boxShadow: 3,
            zIndex: 30,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "90%",
            mx: "auto",
          }}
        >
          <Typography variant="h6">Blogcraftier</Typography>
          <Box>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "50px",
                margin: 0,
                padding: 0,
              }}
            >
              <li><Tooltip title="Home" arrow><Link to="../hmpg" style={{ color: 'inherit' }}>
                <HomeFilledIcon />
              </Link></Tooltip></li>
              <li><Tooltip title="Trending" arrow><WhatshotIcon /></Tooltip></li>
              <li><Tooltip title="Categories" arrow><CategoryIcon /></Tooltip></li>
              <li><Tooltip title="Calendar" arrow><EditCalendarIcon /></Tooltip></li>
              <li><Tooltip title="Achievements" arrow><EmojiEventsIcon /></Tooltip></li>
            </ul>
          </Box>
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: "100%", margin: "auto", mt: 12 }}>
        <Paper sx={{ width: "95%", margin: "auto", pt: 1, pb: 2 }}>
          <Typography variant="h5" align="center" sx={{ mt: 10, mb: 2 }}>
            Start Writing Your Story
          </Typography>

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

