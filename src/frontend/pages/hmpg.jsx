import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Navbar from "../../components/hmpg/navbar/navbar.jsx";



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
      <Navbar />
      
      {/* Main Content Area */}
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
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
                  padding: {xs: 2, sm:1, md:1, lg:1, xl:1},
                  backgroundColor: "rgba(115, 255, 0, 0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#5dffc1ff",
                  fontWeight: "bold",
                  fontSize: {xs: 13, sm: 15, md: 15, lg: 15, xl: 15},
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
                sx={{ fontFamily: "Gravitas One", fontSize: {xs: 30, sm: 45, md: 45, lg: 45, xl: 45}, fontWeight: "bold", padding: 2, color: "#ffffffff", textShadow: " 2px 3px 30px #00000049" }}
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
              <Typography variant="body2" sx={{ fontSize: { xs: 13, sm: 16, md: 16, lg: 16, xl: 16 }, padding: 2, color: "#ffffffff" }}>
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
                  fontSize: { xs: 12, sm: 18, md: 18, lg: 18, xl: 18 },
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
                  fontSize: { xs: 12, sm: 18, md: 18, lg: 18, xl: 18 },
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
                justifyContent: { xs: "space-between", sm: "center", md: "center", lg: "center", xl: "center" },
                color: "#ffffffff",
                width: { xs: "100%" },
                gap: {xs: 0, sm: 5, md: 5, lg: 5, xl: 5}
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 11, sm: 12, md: 12, lg: 12, xl: 12 }, mt: 4 }}
              >
                Join 50K+ writers
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 11, sm: 12, md: 12, lg: 12, xl: 12 }, mt: 4 }}
              >
                1M+ articles
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 11, sm: 12, md: 12, lg: 12, xl: 12 }, mt: 4 }}
              >
                10M+ reads
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Categories and Featured Articles */}
      <Box
        sx={{
          display: "flex",
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
            borderRadius: {xs: 5, sm: 9, md: 9, lg: 9, xl: 9},
            margin: "0 auto 0 auto",
            borderShadow: 3,
            zIndex: 0,
            width: {  xs: "80%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
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
                fontSize: {xs: 20, sm: 30, md: 30, lg: 30, xl: 30},
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
              sx={{ fontSize: {xs: 13, sm: 16, md: 16, lg: 16, xl: 16}, color: "rgba(24, 24, 24, 0.7)", mb: 2 }}
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
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Technology
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Health
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Lifestyle
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Travel
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Finance
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Education
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Food
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Entertainment
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Sports
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Science
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Art
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Business
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Politics
              </Button>
              <Button variant="outlined" sx={{ m: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                Environment
              </Button>
            </Box>
          </Box>
          {/* Featured Articles Section */}
          <Box id="featuredsection" sx={{ mb: 4, width: "100%" }}>
            <Typography
              variant="body1"
              align="left"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                fontSize: { xs: 20, sm: 30, md: 30, lg: 30, xl: 30 },
                textAlign: { xs: "center" },
                fontWeight: "bold",
                color: "rgba(24, 24, 24, 0.7)",
                mt: { xs: 2 },
                mb: 2,
                p: 2,
              }}
            >
              Featured Articles
            </Typography>
            <Box>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: {xs: 15, sm: 20, md: 20, lg: 20, xl: 20 } }}>
                  The Future of Technology: Trends to Watch in 2024
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                  by Jane Doe | Jan 15, 2024
                </Typography>
                <Typography variant="body1" sx={{ fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                  Explore the latest advancements in AI, blockchain, and more
                  that are shaping our world.
                </Typography>
              </Paper>
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: {xs: 15, sm: 20, md: 20, lg: 20, xl: 20 } }}>
                  10 Tips for a Healthier Lifestyle
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                  by John Smith | Feb 10, 2024
                </Typography>
                <Typography variant="body1" sx={{ fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}>
                  Simple changes you can make to improve your physical and
                  mental well-being.
                </Typography>
              </Paper>
              <Paper sx={{ display: { xs: "flex" }, flexDirection: { xs: "column" }, alignContent: {xs: "center"}, p: { xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }, width: "95%", margin: "auto", mt: 3, backgroundColor: "transparent", boxShadow: "none" }}>
                <Typography variant="h5" align="center" sx={{ fontSize: {xs: 20, sm: 30, md: 30, lg: 30, xl: 30 }, textAlign: { xs: "center" }, fontWeight: {xs: "bold"}, color: {xs: "black"}, mt: { xs: 2 }, mb: 2, p: { xs: 2 } }}>
                  Recents
                </Typography>
                {stories.length === 0 ? (
                  <Typography align="center">No stories yet.</Typography>
                ) : (
                  stories.map((story) => (
                    <Paper
                      elevation={3}
                      key={story.id}
                      sx={{
                        p: 2,
                        mb: 2,
                        border: { sm: "1px solid #ddd", md: "1px solid #ddd", lg: "1px solid #ddd", xl: "1px solid #ddd" },
                        borderRadius: { xs: 4, sm: "10px", md: "10px", lg: "10px", xl: "10px" },
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <Typography variant="body1" sx={{ fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 }, whiteSpace: {xs: "pre-wrap"} }}>{story.content}</Typography>
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
          <Box id="trendingsection" sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                align="left"
                sx={{ fontSize: { xs: 20, sm: 30, md: 30, lg: 30, xl: 30 }, fontWeight: "bold", color: "gray", p: 2 }}
              >
                <TrendingUpIcon
                  sx={{ fontSize: { sm: 30, md: 30, lg: 30, xl: 30 }, verticalAlign: "middle", ml: 0.5 }}
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
                      padding: { sm: "0 20px", md: "0 20px", lg: "0 20px", xl: "0 20px"},
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: {xs: 2, sm: 3, md: 3, lg: 3, xl: 3},
                      borderRadius: 2,
                      fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 }
                    }}
                  >
                    1
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    Mastering JavaScript: Advanced Patterns Every Developer Should
                    Know
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    <span style={{ marginRight: "8px" }}>David Park</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Technology
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>57.1 K</Typography>
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
                      padding: { sm: "0 20px", md: "0 20px", lg: "0 20px", xl: "0 20px"},
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: {xs: 2, sm: 3, md: 3, lg: 3, xl: 3},
                      borderRadius: 2,
                      fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 }
                    }}
                  >
                    2
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    The Art of Minimalist Design: Less is More in 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    <span style={{ marginRight: "8px" }}>Anna Flode</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Design
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>34.5 K</Typography>
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
                      padding: { sm: "0 20px", md: "0 20px", lg: "0 20px", xl: "0 20px"},
                      backgroundColor: "lightgray",
                      width: "fit-content",
                      p: {xs: 2, sm: 3, md: 3, lg: 3, xl: 3},
                      borderRadius: 2,
                      fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 }
                    }}
                  >
                    3
                  </Typography>
                </Box>
                {/* article title texts */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    Cryptocurrency Explained: A Beginner's Complete Guide
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1, padding: "0 20px", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}
                  >
                    <span style={{ marginRight: "8px" }}>John Smith</span> .{" "}
                    <span style={{ color: "purple", margin: "0 8px" }}>
                      Finance
                    </span>
                  </Typography>
                </Box>
                {/* views count */}
                <Box sx={{ marginLeft: "auto", padding: "0 20px" }}>
                  <Typography sx={{ color: "green", fontSize: {xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } }}>123.7 K</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Featured Writer Section */}
          <Box sx={{ mb: 4, width: "100%" }}>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: {xs: 20, sm: 30, md: 30, lg: 30, xl: 30}, fontWeight: "bold", color: "gray", p: 2 }}
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
                  alignItems: "flex-start",
                  flexDirection: { xs: "column" },
                  m: 2,
                  p: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }, mb: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, bgcolor: "purple", fontSize: { xs: 20 } }}>SC</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }, mb: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 } }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: 12, sm: 20, md: 20, lg: 20, xl: 20 } }}>
                    Sarah Chen
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: { xs: 12, sm: 13, md: 13, lg: 13, xl: 13 } }}>
                    Tech writer & AI enthusiast
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}>
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
                      fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 15 }
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
                  alignItems: "flex-start",
                  flexDirection: { xs: "column" },
                  m: 2,
                  p: { xs: 3, sm: 6, md: 6, lg: 6, xl: 6 },
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }, mb: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, bgcolor: "purple", fontSize: { xs: 12 } }}>MD</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 }, mb: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 } }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: 12, sm: 20, md: 20, lg: 20, xl: 20 } }}>
                    Marshal Dave
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: { xs: 12, sm: 13, md: 13, lg: 13, xl: 13 } }}>
                    Lifestyle & wellness coach
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}>
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
                      fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 15 }
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
                  alignItems: "flex-start",
                  flexDirection: { xs: "column" },
                  m: 2,
                  p: { xs: 3, sm: 6, md: 6, lg: 6, xl: 6 },
                  borderRadius: 4,
                }}
              >
                {/* icon */}
                <Box>
                  <Avatar sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }, mb: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, bgcolor: "purple", fontSize: { xs: 12 } }}>EK</Avatar>
                </Box>
                {/* article title texts */}
                <Box sx={{ ml: { xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }, mt: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 }, mb: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 } }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: 12, sm: 20, md: 20, lg: 20, xl: 20 } }}>
                    Elena Kowalski
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 1, fontSize: { xs: 12, sm: 13, md: 13, lg: 13, xl: 13 } }}>
                    Business strategist
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: 12, sm: 15, md: 15, lg: 15, xl: 15 } }}>
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
                      fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 15 }
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
            sx={{ fontSize: { xs: 20, sm: 30, md: 30, lg: 30, xl: 30 }, fontWeight: "bold", color: "white", p: 2 }}
          >
            Stay Updated with Latest Stories
          </Typography>
          {/* subheading */}
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: { xs: 12, sm: 16, md: 16, lg: 16, xl: 16 }, color: "white", p: 2 }}
          >
            Get the best articles delivered to your inbox every week
          </Typography>
          {/* email input and subscribe button */}
          <Box sx={{ display: {xs: "flex" }, flexDirection: { xs: "column" }, alignItems: { xs: "center" }, textAlign: {sm: "center", md: "center", lg: "center", xl: "center", lg: "center", xl: "center"}, mb: 4 }}>
            <TextField
              id="filled-textarea"
              label="Email Address"
              multiline
              sx={{ bgcolor: "white", borderRadius: 1, width: {xs: "80%", sm: "300px", md: "300px", lg: "300px", xl: "300px"}, "& .MuiInputBase-root": { height: { xs: 45 }, fontSize: { xs: 12 }, padding: { xs: "0 10px" } }, "& .MuiInputLabel-root": { fontSize: { xs: 13 } 
            },
           }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#4797ffff",
                fontWeight: "bold",
                fontSize: { xs: 12, sm: 14, md: 14, lg: 14, xl: 14 },
                mt: 2,
                width: { xs: "50%", sm: "180px", md: "180px", lg: "180px", xl: "180px" },
                "&:hover": { bgcolor: "#4e6effff", color: "white" },
              }}
            >
              Subscribe Now
            </Button>
            <Typography variant="body2" sx={{ color: "white", mt: 2, fontSize: { xs: 10, sm: 12, md: 12, lg: 12, xl: 12 } }}>
              Join 25,000+ subscribers. No spam, unsubscribe anytime.
            </Typography>
          </Box>
        </Box>
        {/* Footer Section */}
        <Box
          sx={{
            backgroundColor: "rgba(32, 32, 32, 1)",
            textAlign: "center",
            p: {xs: 2, sm: 5, md: 5, lg: 5, xl: 5},
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "white", mb: 2, fontSize: { xs: 20 } }}
          >
            Blogcraftier
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "white", mb: 2, pb: 2, fontSize: { xs: 13 } }}
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
            <ul style={{ margin: { xs: 0 }, padding: { xs: 0 }, listStyle: {xs:"none"} }}>
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
    </Box>
  );
}

export default Hmpg;