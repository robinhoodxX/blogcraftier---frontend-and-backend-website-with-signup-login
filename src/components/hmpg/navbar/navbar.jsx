import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import BasicSelect from "../../hmpg/naviconmobile/navdpdn.jsx";
import Theme from "./comp/theme.jsx";
import * as motion from "motion/react-client"

function Navbar() {

  return (
    <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, width: "100%", margin: "auto", paddingTop: 2 }}>
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ duration: 2 }} style={{ border: 'none', background: 'none', width: '100%' }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 22px",
            backdropFilter: "blur(8px)",
            bgcolor: (theme) => theme.palette.background.navbar,
            color: (theme) => theme.palette.background.paper,
            transition: "background-color 0.3s ease",
            borderRadius: 6,
            marginTop: 2,
            boxShadow: 3,
            zIndex: 30,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: { xs: "80%", sm: "80%", md: "90%", lg: "90%", xl: "90%" },
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
              <li>
                <Tooltip title="Theme" arrow>
                  <Box>
                    <Theme />
                  </Box>
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
      </motion.div>
    </Box>
  )

}

export default Navbar;