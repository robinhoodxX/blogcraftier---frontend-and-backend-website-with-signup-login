import React, { useRef } from "react";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function IconDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setSelectedValue] = React.useState('Select an option'); //[selectedValue, setSelectedValue]

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    if (value) setSelectedValue(value);
  };

  // Create refs for sections
  const trendingRef = useRef(null);
  const featuredRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" }, alignItems: 'center', gap: 2, overflow: 'visible' }}>
      {/* Clickable Icon */}
      <IconButton onClick={handleClick} color="inherit">
        <AutoAwesomeMotionIcon />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        disableScrollLock={true}
      >
        <MenuItem onClick={() => handleClose('Option 1')}><Tooltip title="Home" arrow>
          <Link to="../hmpg" style={{ color: 'inherit' }}>
            <HomeFilledIcon />
          </Link>
        </Tooltip></MenuItem>
        <MenuItem onClick={() => handleClose('Option 2')}><Tooltip title="Trending" arrow onClick={() => scrollToSection(trendingRef)}>
          <WhatshotIcon />
        </Tooltip></MenuItem>
        <MenuItem onClick={() => handleClose('Option 3')}><Tooltip title="Featured" arrow onClick={() => scrollToSection(featuredRef)}>
          <CategoryIcon />
        </Tooltip></MenuItem>
        <MenuItem onClick={() => handleClose('Option 4')}><Tooltip title="Achievements" arrow>
          <EmojiEventsIcon />
        </Tooltip></MenuItem>
      </Menu>
    </Box>
  );
}
