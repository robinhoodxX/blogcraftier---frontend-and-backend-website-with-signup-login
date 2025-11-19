import { Box, Button, Typography, InputBase, IconButton, InputAdornment, TextField, Snackbar } from '@mui/material'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';



function Welcomescreen() {


  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(s => !s);
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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
      const res = await axios.post("http://localhost:5000/api/auth/login", loginData);
      localStorage.setItem("token", res.data.token); // Store JWT token in localStorage
      localStorage.setItem("userId", res.data.user.id); // Store user ID in localStorage
      setSnackbarOpen(true);
      navigate("/hmpg");
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
      width: '100%',
      mt: 5,
      mb: 10
    }}>
      {/* Login Form */}
      <Box sx={{ display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative', }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "60%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
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
                sx={{ fontSize: { xs: 14, sm: 16, md: 16, lg: 16, xl: 16 } }}
              />
            </Box>
            {/* Password Input (with toggle eye) */}
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
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleToggleShowPassword} edge="end" size="small">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ fontSize: { xs: 14, sm: 16, md: 16, lg: 16, xl: 16 } }}
              />
            </Box>
            {error && (
              <Typography color="white" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            {/* Login Button */}
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} disabled={loading} sx={{ mt: 2, p: 1.5, fontSize: { xs:12, sm: 16, md: 16, lg: 16, xl: 16 }, borderRadius: 2, width: '50%' }}>
              Login
            </Button>
            {/* Forgot Password Link */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link to="#" style={{ textDecoration: 'none', color: 'rgba(216, 216, 216, 0.7)', fontSize: { xs: 11, sm: 14, md: 14, lg: 14, xl: 14 } }}>Forgot your password?</Link>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: 'rgba(216, 216, 216, 0.7)',
                  mb: 2,
                  fontSize: { xs: 11, sm: 14, md: 14, lg: 14, xl: 14 }
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
            <Typography variant="body2" align="center" sx={{ color: 'rgba(216, 216, 216, 0.7)', mt: 2, mb: 1, fontSize: { xs: 11, sm: 14, md: 14, lg: 14, xl: 14 } }}>or continue with</Typography>
            {/* Social Login Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flex: 1 }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffffff', color: 'rgba(85, 85, 85, 1)', '&:hover': { backgroundColor: '#303030ff', color: 'white' }, p: 2, m: 1, borderRadius: 2, width: '100%' }}><GoogleIcon sx={{ mr: 1, color: "rgba(68, 210, 151, 1)", fontSize: { xs: 14, sm: 16, md: 16, lg: 16, xl: 16 } }} />Google</Button>
              <Button variant="contained" sx={{ backgroundColor: '#ffffffff', color: 'rgba(85, 85, 85, 1)', '&:hover': { backgroundColor: '#303030ff', color: 'white' }, p: 2, m: 1, borderRadius: 2, width: '100%' }}><FacebookIcon sx={{ mr: 1, color: "rgba(86, 87, 174, 1)", fontSize: { xs: 14, sm: 16, md: 16, lg: 16, xl: 16 } }} />Facebook</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Snackbar popup for login success */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Login successful!"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>

  );
}

export default Welcomescreen;