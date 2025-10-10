import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Genderdropdown from "./comps/prflgenderdrpdn";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";



function Prfl() {

    const userId = localStorage.getItem("userId"); // TODO: replace with logged-in user ID (from auth/session)

    // ================= STATE =================
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        gender: "",
        profile_pic: null,
    });
    const [previewPic, setPreviewPic] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    // ================= FETCH PROFILE =================
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch(`http://localhost:5000/api/users/${userId}`);
            const data = await res.json();
            // Don't load the hashed password into the form
            setProfile({
                username: data.username || "",
                email: data.email || "",
                password: data.password || "", // Keep password field empty for security
                mobile: data.mobile || "",
                address: data.address || "",
                gender: data.gender || "",
                profile_pic: data.profile_pic,
            });
            setPreviewPic(
                data.profile_pic ? `http://localhost:5000${data.profile_pic}` : null
            );
        };
        fetchProfile();
    }, [userId]);

    // ================= HANDLERS =================
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfile({ ...profile, profile_pic: file });
        setPreviewPic(URL.createObjectURL(file));
    };

    const handleSave = async () => {
        const formData = new FormData();
        formData.append("username", profile.username);
        formData.append("email", profile.email);
        // Only append password if it's not empty (user wants to change it)
        if (profile.password.trim() !== "") {
            formData.append("password", profile.password);
        }
        formData.append("mobile", profile.mobile);
        formData.append("address", profile.address);
        formData.append("gender", profile.gender);
        // Append profile picture file if it's a new file
        if (profile.profile_pic instanceof File) {
            formData.append("profile_pic", profile.profile_pic);
        }

        const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
            method: "PUT",
            body: formData,
        });

        const data = await res.json();
        alert(data.message);
    };

  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/lgscrn"); // redirect to login page
  };

  // ✅ Delete account
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Account deleted successfully");
        // Remove user session and redirect
        handleLogout();
      } else {
        alert(data.error || "Failed to delete account");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting account");
    }
  };

    return (
        <Box>
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
                    </Box>
                </Box>
                {/* Main Content Area */}
                <Box sx={{ mt: 10, mb: 4, width: "100%", mx: "auto" }}>
                    <Paper sx={{ borderRadius: 4, boxShadow: 3, width: "95%", mx: "auto" }}>
                        {/* Edit Profile Section */}
                        <Box sx={{ width: "100%", mt: 5, display: "flex", justifyContent: "center" }}>
                            <Paper sx={{ width: "50%", p: 4, borderRadius: 3, boxShadow: "none", background: "transparent" }}>
                                <Typography variant="h5" align="center" gutterBottom>
                                    Edit Profile
                                </Typography>
                                {/* Profile Picture */}
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                                    <Avatar
                                        src={previewPic || ""}
                                        sx={{ width: 100, height: 100, mb: 2 }}
                                    />
                                    <Button variant="contained" component="label">
                                        Change Picture
                                        <input type="file" hidden onChange={handleFileChange} />
                                    </Button>
                                </Box>
                                <Genderdropdown name="gender" value={profile.gender || ""} onChange={handleChange} />
                                {/* Inputs */}
                                <TextField label="Username" name="username" fullWidth margin="normal"
                                    value={profile.username || ""} onChange={handleChange} />
                                <TextField label="Email" name="email" type="email" fullWidth margin="normal"
                                    value={profile.email || ""} onChange={handleChange} />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    fullWidth
                                    margin="normal"
                                    value={profile.password}
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField label="Mobile" name="mobile" fullWidth margin="normal"
                                    value={profile.mobile || ""} onChange={handleChange} />
                                <TextField label="Address" name="address" fullWidth margin="normal"
                                    value={profile.address || ""} onChange={handleChange} />
                                {/* Action Buttons */}
                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    {/* Save Button */}
                                    <Button variant="contained" color="primary" onClick={handleSave}>
                                        Save Changes
                                    </Button>
                                    {/* Delete Button */}
                                    <Button variant="outlined" color="error" onClick={handleDelete}>
                                        Delete Profile
                                    </Button>
                                    {/* Logout Button */}
                                    <Button variant="outlined" color="primary" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

export default Prfl;