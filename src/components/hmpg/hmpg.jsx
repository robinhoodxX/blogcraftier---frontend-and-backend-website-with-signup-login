import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import TextField from '@mui/material/TextField';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import BasicSelect from './comp/navdpdn';



function Hmpg() {

  const [stories, setStories] = useState([]);

  // Load stories when homepage loads
  useEffect(() => {
    fetch("http://localhost:5000/api/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  // Delete story function
  const handleDelete = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/stories/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      // Update UI immediately
      setStories((prev) => prev.filter((story) => story.id !== id));
    } else {
      alert(data.message || "Failed to delete story.");
    }
  } catch (error) {
    console.error("Error deleting story:", error);
    alert("Error deleting story. Please check console for details.");
  }
};


  return (
    <Box>
      {/* Navigation Bar */}
      <Box sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, width: "100%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 22px",
            backgroundColor: "rgba(56, 56, 56, 0.8)",
            backdropFilter: "blur(8px)",
            color: "white",
            borderRadius: 6,
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
              <li>
                <Tooltip title="Home" arrow>
                  <Link to="../hmpg" style={{ color: 'inherit' }}>
                    <HomeFilledIcon />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Trending" arrow>
                  <WhatshotIcon />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Categories" arrow>
                  <CategoryIcon />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Achievements" arrow>
                  <EmojiEventsIcon />
                </Tooltip>
              </li>
            </ul>
          </Box>
          <Tooltip title="Profile" arrow>
            <Link to="../prfl" style={{ color: 'inherit' }}>
              <AccountCircleIcon sx={{ fontSize: 30 }} />
            </Link>
          </Tooltip>
        </Box>
      </Box>
      {/* Navigation Bar for mobile screen */}
      <Box sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, width: "100%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 22px",
            backgroundColor: "rgba(56, 56, 56, 0.8)",
            backdropFilter: "blur(8px)",
            color: "white",
            borderRadius: 6,
            marginTop: 2,
            boxShadow: 3,
            zIndex: 30,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "80%",
            mx: "auto",
          }}
        >
          <Typography variant="h7">Blogcraftier</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <BasicSelect />
            <Tooltip title="Profile" arrow>
              <Link to="../prfl" style={{ color: 'inherit' }}>
                <AccountCircleIcon sx={{ fontSize: 30 }} />
              </Link>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      
      {/* Main Content Area */}
      <Box sx={{ width: "100%", margin: "auto" }}>
        {/*Desktop screen */}
        <Box
          sx={{
            display: {xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex"},
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh",
            padding: "10px 22px",
            margin: "0 auto 0 auto",
            borderShadow: 3,
            zIndex: 1,
            width: "90%",
            mt: 10,
          }}
        >
          {/* Intro Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "24px 0",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Welcome Message */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  padding: 1,
                  backgroundColor: "rgba(115, 255, 0, 0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#5dffc1ff",
                  fontWeight: "bold",
                  fontSize: 15,
                  borderRadius: 8,
                }}
              >
                <AutoAwesomeOutlinedIcon
                  sx={{ color: "#5dffc1ff", fontSize: 20 }}
                />{" "}
                Welcome Back, User
              </Typography>
            </Box>
            {/* Main Heading */}
            <Box>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Gravitas One", fontSize: 40, fontWeight: "bold", padding: 2, color: "#ffffffff", textShadow: " 2px 3px 30px #00000049" }}
              >
                Discover Amazing{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #ff4d4dff, #ffee39ff, #ff4a4aff, #697dffff, #da5fffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    textShadow: " 2px 3px 30px #ffffff19",
                  }}
                >
                  Stories
                </span>
              </Typography>
            </Box>
            {/* Subheading */}
            <Box>
              <Typography variant="body2" sx={{ fontSize: 16, padding: 2, color: "#ffffffff" }}>
                Explore thousands of articles from passionate writers around
                the world. Find your next great read or share your own story.
              </Typography>
            </Box>
            {/* Action Buttons */}
            <Box>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#ce00f7ff",
                  "&:hover": { bgcolor: "#a500c4ff" },
                }}
              >
                <Link
                  to="../stw"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  + Start Writing
                </Link>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  ml: 2,
                  color: "#ffffffff",
                  borderColor: "#ffffffff",
                  "&:hover": {
                    bgcolor: "#f3f3f3",
                    borderColor: "#a500c4ff",
                    color: "#a500c4ff",
                  },
                }}
              >
                Explore Articles
              </Button>
            </Box>
            {/* Statistics */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#ffffffff",
                gap: 5
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: 12, mt: 4 }}
              >
                Join 50K+ writers
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 12, mt: 4 }}
              >
                1M+ articles
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 12, mt: 4 }}
              >
                10M+ reads
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Mobile Screen */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh",
            padding: "10px 22px",
            margin: "0 auto 0 auto",
            borderShadow: 3,
            zIndex: 1,
            width: "90%",
            mt: 10,
          }}
        >
          {/* Intro Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "24px 0",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Welcome Message */}
            <Box>
              <Typography
                variant="h7"
                sx={{
                  width: "100%",
                  padding: 2,
                  backgroundColor: "rgba(115, 255, 0, 0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#5dffc1ff",
                  fontWeight: "bold",
                  fontSize: 13,
                  borderRadius: 8,
                }}
              >
                <AutoAwesomeOutlinedIcon
                  sx={{ color: "#5dffc1ff", fontSize: 20 }}
                />{" "}
                Welcome Back, User
              </Typography>
            </Box>
            {/* Main Heading */}
            <Box>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Gravitas One", fontSize: 30, fontWeight: "bold", padding: 2, color: "#ffffffff", textShadow: " 2px 3px 30px #00000049", mt: 2 }}
              >
                Discover Amazing{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #ff4d4dff, #ffee39ff, #ff4a4aff, #697dffff, #da5fffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    textShadow: " 2px 3px 30px #ffffff19",
                  }}
                >
                  Stories
                </span>
              </Typography>
            </Box>
            {/* Subheading */}
            <Box>
              <Typography variant="body2" sx={{ fontSize: 16, padding: 2, color: "#ffffffff" }}>
                Explore thousands of articles from passionate writers around
                the world. Find your next great read or share your own story.
              </Typography>
            </Box>
            {/* Action Buttons */}
            <Box>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#ce00f7ff",
                  "&:hover": { bgcolor: "#a500c4ff" },
                }}
              >
                <Link
                  to="../stw"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  + Start Writing
                </Link>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  ml: 2,
                  color: "#ffffffff",
                  borderColor: "#ffffffff",
                  "&:hover": {
                    bgcolor: "#f3f3f3",
                    borderColor: "#a500c4ff",
                    color: "#a500c4ff",
                  },
                }}
              >
                Explore Articles
              </Button>
            </Box>
            {/* Statistics */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                color: "#ffffffff",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: 11, mt: 4 }}
              >
                Join 50K+ writers
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 11, mt: 4 }}
              >
                1M+ articles
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 11, mt: 4 }}
              >
                10M+ reads
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Categories and Featured Articles */}
      {/* Desktop Categories and Featured Articles */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
          flexDirection: "column",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            padding: "10px 22px",
            backgroundColor: "#ffffffff",
            boxShadow: 3,
            borderRadius: 9,
            margin: "0 auto 0 auto",
            borderShadow: 3,
            zIndex: 0,
            width: "90%",
            pt: 4,
            mb: 4,
          }}
        >
          {/* Category Section */}
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: 30,
                fontWeight: "bold",
                color: "rgba(24, 24, 24, 0.7)",
                mb: 2,
              }}
            >
              Explore by Category
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 16, color: "rgba(24, 24, 24, 0.7)", mb: 2 }}
            >
              Find content that matches your interests
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button variant="outlined" sx={{ m: 1 }}>
                Technology
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Health
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Lifestyle
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Travel
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Finance
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Education
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Food
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Entertainment
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Sports
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Science
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Art
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Business
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Politics
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Environment
              </Button>
            </Box>
          </Box>
          {/* Featured Articles Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Typography
              variant="body1"
              align="left"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                fontSize: 30,
                fontWeight: "bold",
                color: "rgba(24, 24, 24, 0.7)",
                mb: 2,
                p: 2,
              }}
            >
              Featured Articles
            </Typography>
            <Box>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  The Future of Technology: Trends to Watch in 2024
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  by Jane Doe | Jan 15, 2024
                </Typography>
                <Typography variant="body1">
                  Explore the latest advancements in AI, blockchain, and more
                  that are shaping our world.
                </Typography>
              </Paper>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  10 Tips for a Healthier Lifestyle
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  by John Smith | Feb 10, 2024
                </Typography>
                <Typography variant="body1">
                  Simple changes you can make to improve your physical and
                  mental well-being.
                </Typography>
              </Paper>
              <Paper sx={{ width: "95%", margin: "auto", mt: 3, p: 3, backgroundColor: "transparent", boxShadow: "none" }}>
                <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                  Recents
                </Typography>
                {stories.length === 0 ? (
                  <Typography align="center">No stories yet.</Typography>
                ) : (
                  stories.map((story) => (
                    <Box
                      key={story.id}
                      sx={{
                        p: 2,
                        mb: 2,
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <Typography variant="body1">{story.content}</Typography>
                      <Typography variant="caption" display="block" align="right">
                        {new Date(story.created_at).toLocaleString()}
                      </Typography>
                      {/* Delete button top-right */}
                      <IconButton
                        onClick={() => handleDelete(story.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))
                )}
              </Paper>
            </Box>
          </Box>
          {/* Trending Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                align="left"
                sx={{ fontSize: 30, fontWeight: "bold", color: "gray", p: 2 }}
              >
                <TrendingUpIcon
                  sx={{ fontSize: 30, verticalAlign: "middle", ml: 0.5 }}
                />
                Trending
              </Typography>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      padding: "0 20px",
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    Mastering JavaScript: Advanced Patterns Every Developer Should
                    Know
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    <span style={{ marginRight: "8px" }}>David Park</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Technology
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green" }}>57.1 K</Typography>
                </Box>
              </Box>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      padding: "0 20px",
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    The Art of Minimalist Design: Less is More in 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    <span style={{ marginRight: "8px" }}>Anna Flode</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Design
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green" }}>34.5 K</Typography>
                </Box>
              </Box>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      padding: "0 20px",
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    Cryptocurrency Explained: A Beginner's Complete Guide
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" }}
                  >
                    <span style={{ marginRight: "8px" }}>John Smith</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Finance
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green" }}>123.7 K</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Featured Writer Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                align="left"
                sx={{ fontSize: 30, fontWeight: "bold", color: "gray", p: 2 }}
              >
                <EmojiEventsIcon
                  sx={{ fontSize: 30, verticalAlign: "middle", ml: 0.5 }}
                />
                Featured Writer
              </Typography>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  m: 2,
                  p: 6,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple" }}>SC</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Sarah Chen
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                    Tech writer & AI enthusiast
                  </Typography>
                  <Typography variant="body1">
                    12.5K followers • 89 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ marginLeft: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  m: 2,
                  p: 6,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple" }}>MD</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Marshal Dave
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                    Lifestyle & wellness coach
                  </Typography>
                  <Typography variant="body1">
                    8.2K followers • 156 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ marginLeft: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  m: 2,
                  p: 6,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple" }}>EK</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                    Elena Kowalski
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                    Business strategist
                  </Typography>
                  <Typography variant="body1">
                    15.1K followers • 203 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ marginLeft: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
        {/* Newsletter Subscription Section */}
        <Box
          sx={{
            mt: 0,
            p: 4,
          }}
        >
          {/* heading */}
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: 30, fontWeight: "bold", color: "white", p: 2 }}
          >
            Stay Updated with Latest Stories
          </Typography>
          {/* subheading */}
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: 16, color: "white", p: 2 }}
          >
            Get the best articles delivered to your inbox every week
          </Typography>
          {/* email input and subscribe button */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <TextField
              id="filled-textarea"
              label="Email Address"
              multiline
              sx={{ bgcolor: "white", borderRadius: 1, width: "300px" }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#4797ffff",
                fontWeight: "bold",
                ml: 2,
                height: "56px",
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
            >
              Subscribe Now
            </Button>
            <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
              Join 25,000+ subscribers. No spam, unsubscribe anytime.
            </Typography>
          </Box>
        </Box>
        {/* Footer Section */}
        <Box
          sx={{
            backgroundColor: "rgba(32, 32, 32, 1)",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "white", mb: 2 }}
          >
            Blogcraftier
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "white", mb: 2, pb: 2 }}
          >
            The most beautiful platform for writers, creators, and
            storytellers to share their passion with the world.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, pb: 2, }}
          >
            <IconButton>
              <FavoriteBorderIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }} />
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }} />
            </IconButton>
            <IconButton>
              <ShareIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }} />
            </IconButton>
          </Box>
          <Box>
            <ul>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                <Link
                  to="../abt"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  About
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                <Link
                  to="../cntt"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  Contact
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                <Link
                  to="../pp"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                <Link
                  to="../t&c"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                  color: "white",
                }}
              >
                <Link
                  to="../hc"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      {/* Mobile Categories and Featured Articles */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" },
          flexDirection: "column",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            padding: "10px 22px",
            backgroundColor: "#ffffffff",
            boxShadow: 3,
            borderRadius: 5,
            margin: "0 auto 0 auto",
            borderShadow: 3,
            zIndex: 0,
            width: "80%",
            pt: 4,
            mb: 4,
          }}
        >
          {/* Category Section */}
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: 20,
                fontWeight: "bold",
                color: "rgba(24, 24, 24, 0.7)",
                mb: 2,
              }}
            >
              Explore by Category
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 13, color: "rgba(24, 24, 24, 0.7)", mb: 2 }}
            >
              Find content that matches your interests
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Technology
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Health
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Lifestyle
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Travel
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Finance
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Education
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Food
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Entertainment
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Sports
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Science
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Art
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Business
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Politics
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: 10 }}>
                Environment
              </Button>
            </Box>
          </Box>
          {/* Featured Articles Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: "rgba(24, 24, 24, 0.7)",
                mt: 2,
                mb: 2,
                p: 2,
              }}
            >
              Featured Articles
            </Typography>
            <Box>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15 }}>
                  The Future of Technology: Trends to Watch in 2024
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: 10 }}>
                  by Jane Doe | Jan 15, 2024
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 12 }}>
                  Explore the latest advancements in AI, blockchain, and more
                  that are shaping our world.
                </Typography>
              </Paper>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15 }}>
                  10 Tips for a Healthier Lifestyle
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: 10 }}>
                  by John Smith | Feb 10, 2024
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 12 }}>
                  Simple changes you can make to improve your physical and
                  mental well-being.
                </Typography>
              </Paper>
              <Paper sx={{ display: "flex", flexDirection: "column", alignContent: "center", mt: 3, p: 1, backgroundColor: "transparent", boxShadow: "none", width: "95%" }}>
                <Typography variant="body1"
                  align="left"
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "rgba(24, 24, 24, 0.7)",
                    mt: 2,
                    mb: 2,
                    p: 2,
                  }}>
                  Recents
                </Typography>
                {stories.length === 0 ? (
                  <Typography align="center">No stories yet.</Typography>
                ) : (
                  stories.map((story) => (
                    <Paper elevation={3} sx={{ m: 2, p: 3, borderRadius: 4 }} key={story.id}>
                      <Typography variant="body1" sx={{ fontSize: 12, whiteSpace: "pre-wrap" }}>{story.content}</Typography>
                      <Typography variant="caption" display="block" align="right">
                        {new Date(story.created_at).toLocaleString()}
                      </Typography>
                      {/* Delete button top-right */}
                      <IconButton
                        onClick={() => handleDelete(story.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Paper>
                  ))
                )}
              </Paper>
            </Box>
          </Box>
          {/* Trending Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 20, fontWeight: "bold", color: "gray", p: 2 }}
              >
                <TrendingUpIcon
                  sx={{ verticalAlign: "middle", ml: 0.5 }}
                />
                Trending
              </Typography>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 2,
                      borderRadius: 2,
                      fontSize: 12,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: 12 }}
                  >
                    Mastering JavaScript: Advanced Patterns Every Developer Should
                    Know
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px" , fontSize: 10 }}
                  >
                    <span style={{ marginRight: "8px" }}>David Park</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Technology
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px"}}>
                  <Typography sx={{ color: "green", fontSize: 10 }}>57.1 K</Typography>
                </Box>
              </Box>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 2,
                      borderRadius: 2,
                      fontSize: 12,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: 12 }}
                  >
                    The Art of Minimalist Design: Less is More in 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: 10 }}
                  >
                    <span style={{ marginRight: "8px" }}>Anna Flode</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Design
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green", fontSize: 10 }}>34.5 K</Typography>
                </Box>
              </Box>
              {/* Trending Article Item */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, p: 2 }}>
                {/* icon */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: 2,
                      borderRadius: 2,
                      fontSize: 12,
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: 12 }}
                  >
                    Cryptocurrency Explained: A Beginner's Complete Guide
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: 10 }}
                  >
                    <span style={{ marginRight: "8px" }}>John Smith</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Finance
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green", fontSize: 10 }}>123.7 K</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Featured Writer Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontSize: 20, fontWeight: "bold", color: "gray", p: 2 }}
              >
                <EmojiEventsIcon
                  sx={{ fontSize: 30, verticalAlign: "middle", ml: 0.5 }}
                />
                Featured Writer
              </Typography>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  m: 2,
                  p: 3,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple", fontSize: 12 }}>SC</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ mt: 4, mb: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: 12 }}>
                    Sarah Chen
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: 12 }}>
                    Tech writer & AI enthusiast
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }}>
                    12.5K followers • 89 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ margin: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                      fontSize: 10,
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  m: 2,
                  p: 3,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple", fontSize: 12 }}>MD</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ mt: 4, mb: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: 12 }}>
                    Marshal Dave
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: 12 }}>
                    Lifestyle & wellness coach
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }}>
                    8.2K followers • 156 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ margin: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                      fontSize: 10,
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
              {/* user info */}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  m: 2,
                  p: 3,
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ bgcolor: "purple", fontSize: 12 }}>EK</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ mt: 4, mb: 4 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: 12 }}>
                    Elena Kowalski
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: 12 }}>
                    Business strategist
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: 12 }}>
                    15.1K followers • 203 posts
                  </Typography>
                </Box>
                {/* follow button */}
                <Box sx={{ margin: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ce00f7ff",
                      "&:hover": { bgcolor: "#a500c4ff" },
                      fontSize: 10,
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
        {/* Newsletter Subscription Section */}
        <Box
          sx={{
            mt: 0,
            p: 4,
          }}
        >
          {/* heading */}
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: 20, fontWeight: "bold", color: "white", p: 2 }}
          >
            Stay Updated with Latest Stories
          </Typography>
          {/* subheading */}
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: 12, color: "white", p: 2 }}
          >
            Get the best articles delivered to your inbox every week
          </Typography>
          {/* email input and subscribe button */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <TextField
              id="filled-textarea"
              label="Email Address"
              multiline
              sx={{
                bgcolor: "white", borderRadius: 1, width: "80%", "& .MuiInputBase-root": {
                  height: 45,     // control height
                  fontSize: 12,   // font size
                  padding: "0 10px", // inner padding
                },
                "& .MuiInputLabel-root": {
                  fontSize: 13,
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#4797ffff",
                fontWeight: "bold",
                mt: 2,
                width: "50%",
                "&:hover": { bgcolor: "#f0f0f0" },
                fontSize: 10,
              }}
            >
              Subscribe Now
            </Button>
            <Typography variant="body2" sx={{ color: "white", mt: 2, fontSize: 10 }}>
              Join 25,000+ subscribers. No spam, unsubscribe anytime.
            </Typography>
          </Box>
        </Box>
        {/* Footer Section */}
        <Box
          sx={{
            backgroundColor: "rgba(32, 32, 32, 1)",
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "white", mb: 2, fontSize: 20 }}
          >
            Blogcraftier
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "white", mb: 2, pb: 2, fontSize: 13 }}
          >
            The most beautiful platform for writers, creators, and
            storytellers to share their passion with the world.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, pb: 2, }}
          >
            <IconButton>
              <FavoriteBorderIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }}/>
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }}/>
            </IconButton>
            <IconButton>
              <ShareIcon sx={{ p: 1, color: "white", ":hover": { color: "pink" } }}/>
            </IconButton>
          </Box>
          <Box>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                }}
              >
                <Link
                  to="../abt"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 10,
                    "&:hover": { color: "pink" },
                  }}
                >
                  About
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                }}
              >
                <Link
                  to="../cntt"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 10,
                    "&:hover": { color: "pink" },
                  }}
                >
                  Contact
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                }}
              >
                <Link
                  to="../pp"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 10,
                    "&:hover": { color: "pink" },
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                }}
              >
                <Link
                  to="../t&c"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 10,
                    "&:hover": { color: "pink" },
                  }}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li
                style={{
                  display: "inline",
                  margin: "0 10px",
                }}
              >
                <Link
                  to="../hc"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 10,
                    "&:hover": { color: "pink" },
                  }}
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hmpg;