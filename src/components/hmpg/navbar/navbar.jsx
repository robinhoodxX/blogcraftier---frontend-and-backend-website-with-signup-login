import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import BasicSelect from "../../hmpg/naviconmobile/navdpdn.jsx";


function Navbar() {

  return (
    <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, width: "100%", margin: "auto", paddingTop: 2 }}>
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
          width: {  xs: "80%", sm: "80%", md: "90%", lg: "90%", xl: "90%" },
          mx: "auto",
        }}
      >
        <Typography variant="h6">Blogcraftier</Typography>
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" } }}>
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
              <Tooltip title="Featured" arrow>
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
  )

}

export default Navbar;