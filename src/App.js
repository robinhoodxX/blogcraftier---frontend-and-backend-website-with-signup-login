import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomescreen from "./frontend/pages/welcomescreen.jsx";
import LgScrn from "./frontend/pages/lgscrn"; // adjust path if different
import Sgnp from "./frontend/pages/sgnp"; // adjust path if different
import Hmpg from "./frontend/pages/hmpg"; // adjust path if different
import Tandc from "./components/hmpg/t&c/t&c"; // adjust path if different
import Pp from "./components/hmpg/pp/pp"; // adjust path if different
import Hc from "./components/hmpg/hc/hc"; // adjust path if different
import Cntt from "./components/hmpg/cntt/cntt"; // adjust path if different
import Abt from "./components/hmpg/abt/abt"; // adjust path if different
import Stw from "./components/hmpg/startwriting/stw"; // adjust path if different
import Prfl from "./components/hmpg/prfl/prfl"; // adjust path if different
import Theme from "./components/hmpg/navbar/comp/theme.jsx"; // adjust path if different
import "./animationscript/ParticleBackground.css";
import { Box } from '@mui/material';

import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

  //  Get theme state from Redux store
  const mode = useSelector((state) => state.theme.mode);

  //  Create dynamic theme based on mode
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      background: {
        default: mode === "light" ? "rgba(24, 24, 24, 0.7)" : "rgba(240, 240, 240, 0.9)",
        paper: mode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(29, 29, 29, 0.8)",
        navbar: mode === "light" ? "rgba(56, 56, 56, 0.8)" : "rgba(255, 255, 255, 0.8)",
      },
      text: {
        primary: mode === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 1)",
        secondary: mode === "light" ? "rgba(36, 36, 36, 0.6)" : "rgba(255, 255, 255, 0.8)",
        third: mode === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
      },
    },
  });


  // Particle Background Effect

  useEffect(() => {
    // 1️⃣ Update body class for theme
    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);

    // 2️⃣ Update particle background
    const container = document.getElementById("bgAnimation");
    if (!container) return;


    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random horizontal position
      particle.style.left = Math.random() * 100 + "%";

      // Random size
      const size = Math.random() * 6 + 2;
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      // Random animation duration and delay
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";

      // Change particle color based on theme
      const particles = container.querySelectorAll(".particle");
      particles.forEach(p => {
        p.style.backgroundColor = mode === "dark" ? "black" : "white";
      });

      container.appendChild(particle);
    }
  }, [mode]);

  const [stories, setStories] = useState([]);

  const handleStoryAdded = (story) => {
    setStories((prev) => [story, ...prev]); // put new story on top
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box id="bgAnimation"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
          }}
        ></Box>
        <Routes>
          <Route path="/" element={<Welcomescreen />} />
          <Route path="/lgscrn" element={<LgScrn />} />
          <Route path="/sgnp" element={<Sgnp />} />
          <Route path="/hmpg" element={<Hmpg stories={stories} />} />
          <Route path="/t&c" element={<Tandc />} />
          <Route path="/pp" element={<Pp />} />
          <Route path="/hc" element={<Hc />} />
          <Route path="/cntt" element={<Cntt />} />
          <Route path="/abt" element={<Abt />} />
          <Route path="/stw" element={<Stw onStoryAdded={handleStoryAdded} />} />
          <Route path="/prfl" element={<Prfl />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
