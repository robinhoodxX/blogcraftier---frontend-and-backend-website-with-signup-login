import { Box, Button, Typography, InputBase } from '@mui/material'
import { styled } from '@mui/system';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../lgscrn/ParticleBackground.css";



function SignupScreen() {

  // particle background effect
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

  {/* signup form */}
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // NEW: confirmPassword field
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // NEW: client-side validation for confirm password before sending to backend
  const handleSignup = async () => {
    setError("");

    // Basic client-side required fields check
    if (
      !formData.fullName.trim() ||
      !formData.username.trim() ||
      !formData.email.trim() ||
      !formData.password
    ) {
      setError("Please fill all required fields.");
      return;
    }

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/signup", formData);
      alert(res.data.message);
      // optional: redirect or clear form here
    } catch (err) {
      // Enhanced error logging for debugging
      if (err.response) {
        console.error("Backend responded with error:", err.response.data);
        setError(err.response.data?.error || "Signup failed.");
      } else if (err.request) {
        console.error("No response received from backend:", err.request);
        setError("No response from server. Is the backend running?");
      } else {
        console.error("Error setting up request:", err.message);
        setError("Signup failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom right, #312e81, #581c87, #be185d)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        id="bgAnimation"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            maxWidth: 1000,
            p: 5,
            mx: "auto",
            mt: 1,
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.1)", // like Paper
            backdropFilter: "blur(8px)",
            boxShadow: 3,     // mimic Paper's elevation
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transition: "0.3s",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.9)" }}
            >
              Create Account
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Join our community of storytellers.
            </Typography>
          </Box>
          {/* Main Content Area */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {/* Login Form */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
              }}
            >
              {/* Full Name Input */}
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
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                  sx={{ fontSize: 16 }}
                />
              </Box>
              {/* Username Input */}
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
                  name="username"
                  placeholder="@Username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                  sx={{ fontSize: 16 }}
                />
              </Box>
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
                  value={formData.email}
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
                  mb: 2,
                  bgcolor: "white",
                  width: "100%",
                }}
              >
                <HttpsIcon sx={{ color: "gray", mr: 1 }} />
                <InputBase
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  sx={{ fontSize: 16 }}
                />
              </Box>
              {/* Confirm Password Input */}
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
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  sx={{ fontSize: 16 }}
                />
              </Box>
              {error && (<Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
              )}
              {/* Signup Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSignup} 
                disabled={loading}
                sx={{ mt: 2, p: 1.5, fontSize: 16, borderRadius: 2 }}
              >
                Signup
              </Button>
              {/* Forgot Password Link */}
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: "rgba(216, 216, 216, 0.7)", mb: 2 }}
                >
                  {" "}
                  Already have an account?{" "}
                  <Link
                    to="../lgscrn"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: "bold",
                    }}
                  >
                    Log in
                  </Link>
                </Typography>
              </Box>
            </Box>
            {/* Divider and Social Login */}
            <Box sx={{ mb: 15, width: "40%", p: 2 }}>
              {/* Divider */}
              <Typography
                variant="body2"
                align="center"
                sx={{ color: "rgba(216, 216, 216, 0.7)", mt: 2, mb: 1 }}
              >
                or continue with
              </Typography>
              {/* Social Login Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  flex: 1,
                }}
              >
                {/* Social Buttons */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffffff",
                    color: "rgba(85, 85, 85, 1)",
                    "&:hover": { backgroundColor: "#303030ff", color: "white" },
                    p: 2,
                    m: 1,
                    borderRadius: 2,
                    width: "100%",
                  }}
                >
                  <GoogleIcon sx={{ mr: 1, color: "rgba(68, 210, 151, 1)" }} />
                  Google
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffffff",
                    color: "rgba(85, 85, 85, 1)",
                    "&:hover": { backgroundColor: "#303030ff", color: "white" },
                    p: 2,
                    m: 1,
                    borderRadius: 2,
                    width: "100%",
                  }}
                >
                  <FacebookIcon sx={{ mr: 1, color: "rgba(86, 87, 174, 1)" }} />
                  Facebook
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignupScreen;