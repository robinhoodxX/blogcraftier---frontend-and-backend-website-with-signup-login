import { Box, Button, Typography, InputBase } from '@mui/material'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./ParticleBackground.css";



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


  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes for login
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit login form to backend
  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", loginData);
      alert("Login successful!");
      navigate("../hmpg");
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.error || "Login failed.");
      } else if (err.request) {
        setError("No response from server. Is the backend running?");
      } else {
        setError("Login failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <Box sx={{
      background: "linear-gradient(to bottom right, #312e81, #581c87, #be185d)",
      height: '100vh',
      width: '100%'
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box id="bgAnimation" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%",
            maxWidth: 400,
            p: 5,
            maxWidth: 400,
            mx: "auto",
            mt: 8,
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)", // like Paper
            backdropFilter: "blur(8px)",
            boxShadow: 3,     // mimic Paper's elevation
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transition: "0.3s",
            zIndex: 2,
          }}
        >
          {/* Login Form */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {/* Login Header */}
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)', mb: 3 }}>
              Welcome back!
            </Typography>
            {/* Email Input */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
                p: 1,
                mb: 2,
                bgcolor: "white",
                width: "100%",
              }}
            >
              <MailOutlineOutlinedIcon sx={{ color: "gray", mr: 1 }} />
              <InputBase
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
                fullWidth
                sx={{ fontSize: 16 }}
              />
            </Box>
            {/* Password Input */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
                p: 1,
                bgcolor: "white",
                width: "100%",
              }}
            >
              <HttpsIcon sx={{ color: "gray", mr: 1 }} />
              <InputBase
                name="password"
                type="text"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                fullWidth
                sx={{ fontSize: 16 }}
              />
            </Box>
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            {/* Login Button */}
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} disabled={loading} sx={{ mt: 2, p: 1.5, fontSize: 16, borderRadius: 2, width: '50%' }}>
              Login
            </Button>
            {/* Forgot Password Link */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link to="#" style={{ textDecoration: 'none', color: 'rgba(216, 216, 216, 0.7)', fontSize: 14 }}>Forgot your password?</Link>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: 'rgba(216, 216, 216, 0.7)',
                  mb: 2
                }}
              >
                Don't have an account?
                <Link
                  to="../sgnp"
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
          {/* Divider and Social Login */}
          <Box>
            {/* Divider */}
            <Typography variant="body2" align="center" sx={{ color: 'rgba(216, 216, 216, 0.7)', mt: 2, mb: 1 }}>or continue with</Typography>
            {/* Social Login Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flex: 1 }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffffff', color: 'rgba(85, 85, 85, 1)', '&:hover': { backgroundColor: '#303030ff', color: 'white' }, p: 2, m: 1, borderRadius: 2, width: '100%' }}><GoogleIcon sx={{ mr: 1, color: "rgba(68, 210, 151, 1)" }} />Google</Button>
              <Button variant="contained" sx={{ backgroundColor: '#ffffffff', color: 'rgba(85, 85, 85, 1)', '&:hover': { backgroundColor: '#303030ff', color: 'white' }, p: 2, m: 1, borderRadius: 2, width: '100%' }}><FacebookIcon sx={{ mr: 1, color: "rgba(86, 87, 174, 1)" }} />Facebook</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcomescreen;