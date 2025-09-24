import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import { useEffect } from 'react';
import "./lgscrn/ParticleBackground.css";

// To start first run xampp and start the Apache and MySQL modules.
// Create a database named "myapp" in phpmyadmin and create a table named "users" with the following SQL command:
// CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(100), username VARCHAR(50) UNIQUE, email VARCHAR(100) UNIQUE, password VARCHAR(255));
// To start using the app, users need to log in or sign up. You must start the server.js using "node server.js" command in the terminal.
// then use "npm start" to run the React app.
// The server runs on http://localhost:5000 and the React app on http://localhost:3000 by default.


function Welcomescreen() {

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

  const Box1 = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    backdropFilter: 'blur(20px)', 
    WebkitBackdropFilter: "blur(50px)", 
    border: '1px solid rgba(255, 255, 255, 0.4)', 
    padding: '30px', 
    margin: '20px 10px', 
    borderRadius: '15px', 
    width: '100%',
    transition: "0.3s",
    '&:hover': {
      boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.37)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: "blur(50px)",
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
  }));


  return (
    <Box sx={{
      background: "linear-gradient(to bottom right, #312e81, #581c87, #be185d)",
      height: '100vh',
      width: '100%'
    }}>
      <Box id="bgAnimation"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative', overflow: 'hidden', zIndex: 2 }}>
        {/* Welcome Text */}
        <Box>
          <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center', pt: 4 }}>Welcome to BlogCraftier</Typography>
          <Typography variant="body2" color="initial" sx={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', mt: 2 }}>Where stories come to life and creativity knows no bounds.</Typography>
        </Box>
        {/* Features */}
        <Box sx={{ display: 'flex', width: '60%', justifyContent: 'space-around', mt: 6 }}>
          <Box1>
            <AutoAwesomeOutlinedIcon sx={{ fontSize: 40, color: 'yellow' }} />
            <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>AI-Powered Writing</Typography>
            <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Get suggestions and enhance your content with AI</Typography>
          </Box1>
          <Box1>
            <GroupOutlinedIcon sx={{ fontSize: 40, color: 'lightblue' }} />
            <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>Global Community</Typography>
            <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Connect with 50K+ writers worldwide</Typography>
          </Box1>
          <Box1>
            <ElectricBoltOutlinedIcon sx={{ fontSize: 40, color: 'lightgreen' }} />
            <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>Instant Publishing</Typography>
            <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Share your stories with one click</Typography>
          </Box1>
        </Box>
        {/* Buttons */}
        <Box>
          <Button variant="contained" component={Link} to="/sgnp" sx={{ mt: 4, backgroundColor: '#ffffffff', color: 'black', '&:hover': { backgroundColor: '#cfcfcfff' }, p: 2, m: 2, borderRadius: 2, width: '270px' }}>Start Writing Today</Button>
          <Button variant="outlined" component={Link} to="/lgscrn" sx={{ mt: 4, color: 'white', border: '1px solid white', '&:hover': { backgroundColor: '#bcbcbcff' }, p: 2, m: 2, borderRadius: 2, width: '270px', textAlign: 'center' }}>I Already have an account</Button>
        </Box>
        {/* Footer Text */}
        <Box>
          <Typography variant="body2" color="initial" sx={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', mt: 9 }}>Trusted by creators from top publications worldwide</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcomescreen;