import React, { useState } from "react";
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
import "./animationscript/ParticleBackground.css";
import { Box } from '@mui/material';
import { useEffect } from 'react';

function App() {

  // Particle Background Effect
  useEffect(() => {
      const container = document.getElementById("bgAnimation");
  
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
  
        container.appendChild(particle);
      }
    }, []);

  const [stories, setStories] = useState([]);

  const handleStoryAdded = (story) => {
    setStories((prev) => [story, ...prev]); // put new story on top
  };

  return (
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
      </Routes>
    </Router>
  );
}

export default App;
