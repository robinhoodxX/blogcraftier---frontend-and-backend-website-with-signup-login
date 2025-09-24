import * as React from 'react';
import { Box, Button, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Paper from '@mui/material/Paper';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';


function hmpg() {

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
              borderStartEndRadius: 8,
              borderStartStartRadius: 8,
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
                    <HomeFilledIcon />
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
                  <Tooltip title="Calendar" arrow>
                    <EditCalendarIcon />
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Achievements" arrow>
                    <EmojiEventsIcon />
                  </Tooltip>
                </li>
              </ul>
            </Box>
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Box>
        </Box>
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
              backgroundColor: "#ffffffff",
              boxShadow: 3,
              margin: "0 auto 0 auto",
              borderShadow: 3,
              zIndex: 0,
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
              }}
            >
              {/* Welcome Message */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    width: "100%",
                    padding: 1,
                    backgroundColor: "rgba(243, 33, 103, 0.2)",
                    color: "#ce00f7ff",
                    fontWeight: "bold",
                    fontSize: 15,
                    borderRadius: 8,
                  }}
                >
                  <AutoAwesomeOutlinedIcon
                    sx={{ color: "#ce00f7ff", fontSize: 20 }}
                  />{" "}
                  Welcome Back, User
                </Typography>
              </Box>
              {/* Main Heading */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 40, fontWeight: "bold", padding: 2 }}
                >
                  Discover Amazing{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, red, orange, purple, blue, indigo, violet)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    Stories
                  </span>
                </Typography>
              </Box>
              {/* Subheading */}
              <Box>
                <Typography variant="body2" sx={{ fontSize: 16, padding: 2 }}>
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
                  + Start Writing
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 3,
                    ml: 2,
                    color: "#ce00f7ff",
                    borderColor: "#ce00f7ff",
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
                  width: "40%",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: "gray", mt: 4 }}
                >
                  Join 50K+ writers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: "gray", mt: 4 }}
                >
                  1M+ articles
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: "gray", mt: 4 }}
                >
                  10M+ reads
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Categories and Featured Articles */}
        <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#f9f9f9", pt: 4, pb: 4 }}>
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
              <Paper elevation={3} sx={{ m: 2, p: 6, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Top Travel Destinations for 2024
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                  by Emily Johnson | Mar 5, 2024
                </Typography>
                <Typography variant="body1">
                  Discover breathtaking locations and hidden gems around the
                  world.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default hmpg;