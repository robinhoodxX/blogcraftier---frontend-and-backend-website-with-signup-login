import * as React from 'react';
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
  const [selectedValue, setSelectedValue] = React.useState('Select an option');

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    if (value) setSelectedValue(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflow: 'visible' }}>
      {/* Clickable Icon */}
      <IconButton onClick={handleClick} color="inherit">
        <AutoAwesomeMotionIcon />
      </IconButton>

      {/* Dropdown Menu */}
          <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(null)}
          >
              <MenuItem onClick={() => handleClose('Option 1')}><Tooltip title="Home" arrow>
                  <Link to="../hmpg" style={{ color: 'inherit' }}>
                      <HomeFilledIcon />
                  </Link>
              </Tooltip></MenuItem>
              <MenuItem onClick={() => handleClose('Option 2')}><Tooltip title="Trending" arrow>
                  <WhatshotIcon />
              </Tooltip></MenuItem>
              <MenuItem onClick={() => handleClose('Option 3')}><Tooltip title="Categories" arrow>
                  <CategoryIcon />
              </Tooltip></MenuItem>
              <MenuItem onClick={() => handleClose('Option 4')}><Tooltip title="Bookmarks" arrow>
                  <Tooltip title="Achievements" arrow>
                      <EmojiEventsIcon />
                  </Tooltip>
              </Tooltip></MenuItem>
          </Menu>
    </Box>
  );
}
