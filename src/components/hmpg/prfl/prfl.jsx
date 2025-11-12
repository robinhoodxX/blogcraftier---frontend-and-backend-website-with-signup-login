import React, { useState, useEffect } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Genderdropdown from "./comps/prflgenderdrpdn";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BasicSelect from '../naviconmobile/navdpdn';



function Prfl() {

    const userId = localStorage.getItem("userId"); // TODO: replace with logged-in user ID (from auth/session)

    // ================= STATE =================
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        password: "",
        oldPassword: "",
        newPassword: "", //  new field
        mobile: "",
        address: "",
        gender: "",
        profile_pic: null,
    });
    const [previewPic, setPreviewPic] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

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
        try {
            //  If the user entered a new password, handle it via secure password update route
            if (profile.newPassword && profile.newPassword.trim() !== "") {
                const res = await fetch(`http://localhost:5000/api/users/${userId}/password`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        oldPassword: profile.oldPassword, //  old password for verification
                        newPassword: profile.newPassword, //  new password to hash
                    }),
                });

                const data = await res.json();
                if (!res.ok) {
                    alert(data.error || "Failed to update password.");
                    return; // stop here if password update fails
                }
                alert("Password updated successfully!");
            }

            //  Continue saving other profile data
            const formData = new FormData();
            formData.append("username", profile.username);
            formData.append("email", profile.email);
            formData.append("mobile", profile.mobile);
            formData.append("address", profile.address);
            formData.append("gender", profile.gender);

            //  Only append profile picture if it's a file
            if (profile.profile_pic instanceof File) {
                formData.append("profile_pic", profile.profile_pic);
            }

            //  Send updated info to backend
            const res2 = await fetch(`http://localhost:5000/api/users/${userId}`, {
                method: "PUT",
                body: formData,
            });

            const data2 = await res2.json();
            alert(data2.message);

            //  Update preview if new pic uploaded
            if (data2.profile_pic_url) {
                setPreviewPic(`http://localhost:5000${data2.profile_pic_url}`);
                setProfile(prev => ({ ...prev, profile_pic: data2.profile_pic_url }));
            }

        } catch (error) {
            console.error("Save error:", error);
            alert("⚠️ Something went wrong while saving profile.");
        }
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
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, width: "100%", margin: "auto" }}>
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
                                    <Tooltip title="Achievements" arrow>
                                        <EmojiEventsIcon />
                                    </Tooltip>
                                </li>
                            </ul>
                        </Box>
                        <Tooltip title="Profile" arrow>
                            <Link to="../prfl" style={{ color: 'inherit' }}>
                                <AccountCircleIcon sx={{ fontSize: 30 }} />
                            </Link>
                        </Tooltip>
                    </Box>
                </Box>
                {/* Navigation Bar for mobile screen */}
                <Box sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, width: "100%", margin: "auto" }}>
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
                            width: "80%",
                            mx: "auto",
                        }}
                    >
                        <Typography variant="h7">Blogcraftier</Typography>
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
                {/* Main Content Area */}
                <Box sx={{ mt: 15, pb: 6, width: "100%", mx: "auto" }}>
                    {/* Desktop Screen */}
                    <Paper sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }, borderRadius: 4, boxShadow: 3, width: "90%", mx: "auto", pt: 2, pb: 4 }}>
                        {/* Edit Profile Section */}
                        <Box sx={{ width: "100%", mt: 5, display: "flex", justifyContent: "center" }}>
                            <Paper sx={{ width: "50%", p: 1, borderRadius: 3, boxShadow: "none", background: "transparent" }}>
                                <Typography variant="h5" align="center" gutterBottom sx={{ mb: 2 }}>
                                    Edit Profile
                                </Typography>
                                {/* Profile Picture */}
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                                    <Avatar
                                        src={previewPic || ""}
                                        sx={{ width: 100, height: 100, mb: 2 }}
                                    />
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Button variant="contained" component="label" sx={{ textTransform: "none", boxShadow: "none" }}>
                                            Change Picture
                                            <input type="file" hidden onChange={handleFileChange} />
                                        </Button>
                                        <Genderdropdown name="gender" value={profile.gender || ""} onChange={handleChange} sx={{ fontSize: 12 }} />
                                    </Box>
                                </Box>
                                {/* Inputs */}
                                <TextField label="Username" name="username" fullWidth margin="normal"
                                    value={profile.username || ""} onChange={handleChange}
                                    autoComplete="username" // * ADDED
                                />

                                <TextField label="Email" name="email" type="email" fullWidth margin="normal"
                                    value={profile.email || ""} onChange={handleChange}
                                    autoComplete="email" // * ADDED
                                />

                                {/* ⭐ Old Password */}
                                <TextField
                                    label="Old Password"
                                    name="oldPassword"
                                    type={showOldPassword ? "text" : "password"}
                                    fullWidth
                                    margin="normal"
                                    value={profile.oldPassword || ""}
                                    onChange={handleChange}
                                    autoComplete="current-password" // * ADDED
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowOldPassword(!showOldPassword)}>
                                                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {/* ⭐ New Password */}
                                <TextField
                                    label="New Password"
                                    name="newPassword"
                                    type={showNewPassword ? "text" : "password"}
                                    fullWidth
                                    margin="normal"
                                    value={profile.newPassword || ""}
                                    onChange={handleChange}
                                    autoComplete="new-password" // * ADDED
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowNewPassword(!showNewPassword)}>
                                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField label="Mobile" name="mobile" fullWidth margin="normal"
                                    value={profile.mobile || ""} onChange={handleChange}
                                    autoComplete="tel" // * ADDED
                                />
                                <TextField label="Address" name="address" fullWidth margin="normal"
                                    value={profile.address || ""} onChange={handleChange}
                                    autoComplete="street-address" // * ADDED
                                />
                                {/* Action Buttons */}
                                <Box sx={{ mt: 3, textAlign: "center", gap: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    {/* Save Button */}
                                    <Button variant="contained" color="primary" onClick={handleSave}>
                                        Save Changes
                                    </Button>
                                    {/* Sign Out Button */}
                                    <Button variant="outlined" color="error" onClick={handleLogout}>
                                        Sign Out
                                    </Button>
                                    {/* Delete Button */}
                                    <Button variant="outlined" color="error" onClick={handleDelete}>
                                        Delete Profile
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Paper>
                    {/* Mobile Screen */}
                    <Paper sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, borderRadius: 4, boxShadow: 3, width: "90%", mx: "auto", pt: 2, pb: 4 }}>
                        {/* Edit Profile Section */}
                        <Box sx={{ width: "100%", mt: 5, display: "flex", justifyContent: "center" }}>
                            <Paper sx={{ width: "90%", p: 1, borderRadius: 3, boxShadow: "none", background: "transparent" }}>
                                <Typography variant="h5" align="center" gutterBottom sx={{ fontSize: 16, mb: 2 }}>
                                    Edit Profile
                                </Typography>
                                {/* Profile Picture */}
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                                    <Avatar
                                        src={previewPic || ""}
                                        sx={{ width: 100, height: 100, mb: 2 }}
                                    />
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Button variant="contained" component="label" sx={{ fontSize: 10, textTransform: "none", boxShadow: "none" }}>
                                            Change Picture
                                            <input type="file" hidden onChange={handleFileChange} />
                                        </Button>
                                        <Genderdropdown name="gender" value={profile.gender || ""} onChange={handleChange} />
                                    </Box>
                                </Box>
                                {/* Inputs */}
                                <TextField label="Username" name="username" fullWidth margin="normal"
                                    value={profile.username || ""} onChange={handleChange} sx={{
                                        autoComplete: "username", // * ADDED (for mobile styled TextField add prop as well)
                                        "& .MuiInputBase-root": {
                                            height: 45,     // control height
                                            fontSize: 12,   // font size
                                            padding: "0 10px", // inner padding
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: 13,
                                        },
                                    }} />
                                <TextField label="Email" name="email" type="email" fullWidth margin="normal"
                                    value={profile.email || ""} onChange={handleChange} sx={{
                                        autoComplete: "email", // * ADDED
                                        "& .MuiInputBase-root": {
                                            height: 45,     // control height
                                            fontSize: 12,   // font size
                                            padding: "0 10px", // inner padding
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: 13,
                                        },
                                    }} />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    fullWidth
                                    margin="normal"
                                    value={profile.password}
                                    onChange={handleChange}
                                    autoComplete="current-password" // * ADDED
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            height: 45,     // control height
                                            fontSize: 12,   // font size
                                            padding: "0 10px", // inner padding
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: 13,
                                        },
                                    }} />
                                <TextField label="Mobile" name="mobile" fullWidth margin="normal"
                                    value={profile.mobile || ""} onChange={handleChange} sx={{
                                        autoComplete: "tel", // * ADDED
                                        "& .MuiInputBase-root": {
                                            height: 45,     // control height
                                            fontSize: 12,   // font size
                                            padding: "0 10px", // inner padding
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: 13,
                                        },
                                    }} />
                                <TextField label="Address" name="address" fullWidth margin="normal"
                                    value={profile.address || ""} onChange={handleChange} sx={{
                                        autoComplete: "street-address", // * ADDED
                                        "& .MuiInputBase-root": {
                                            height: 45,     // control height
                                            fontSize: 12,   // font size
                                            padding: "0 10px", // inner padding
                                        },
                                        "& .MuiInputLabel-root": {
                                            fontSize: 13,
                                        },
                                    }} />
                                {/* Action Buttons */}
                                <Box sx={{ mt: 3, textAlign: "center", gap: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    {/* Save Button */}
                                    <Button variant="contained" color="primary" onClick={handleSave} sx={{ fontSize: 10 }}>
                                        Save Changes
                                    </Button>
                                    {/* Sign Out Button */}
                                    <Button variant="outlined" color="error" onClick={handleLogout} sx={{ fontSize: 10 }}>
                                        Sign Out
                                    </Button>
                                    {/* Delete Button */}
                                    <Button variant="outlined" color="error" onClick={handleDelete} sx={{ fontSize: 10 }}>
                                        Delete Profile
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