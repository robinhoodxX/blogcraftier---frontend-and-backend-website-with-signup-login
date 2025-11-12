import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

// To start first run xampp and start the Apache and MySQL modules.
// Create a database named "myapp" in phpmyadmin and create a table named "users" with the following SQL command:
// CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, fullName VARCHAR(100), username VARCHAR(50) UNIQUE, email VARCHAR(100) UNIQUE, password VARCHAR(255));
// To start using the app, users need to log in or sign up. You must start the server.js using "node server.js" command in the terminal.
// then use "npm start" to run the React app.
// The server runs on http://localhost:5000 and the React app on http://localhost:3000 by default.


function Welcomescreen() {


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
      width: '100%',
    }}>
      {/* For desktop screens */}
      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', mt: 15 }}>
        {/* Welcome Text */}
        <Box>
          <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center', pt: 4 }}>Welcome to BlogCraftier</Typography>
          <Typography variant="body2" color="initial" sx={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', mt: 2 }}>Where stories come to life and creativity knows no bounds.</Typography>
        </Box>
        {/* Features */}
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 6 }}>
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
        </Box>
        {/* Features for mobile screen*/}
        <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' }, alignItems: 'center', justifyContent: 'center', width: '70%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 6 }}>
            <Box1>
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 20, color: 'yellow' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>AI-Powered Writing</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Get suggestions and enhance your content with AI</Typography>
            </Box1>
            <Box1>
              <GroupOutlinedIcon sx={{ fontSize: 20, color: 'lightblue' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>Global Community</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Connect with 50K+ writers worldwide</Typography>
            </Box1>
            <Box1>
              <ElectricBoltOutlinedIcon sx={{ fontSize: 20, color: 'lightgreen' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white' }}>Instant Publishing</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white' }}>Share your stories with one click</Typography>
            </Box1>
          </Box>
        </Box>
        {/* Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}}>
          <Button variant="contained" component={Link} to="/sgnp" sx={{ mt: 4, backgroundColor: '#ffffffff', color: 'black', '&:hover': { backgroundColor: '#cfcfcfff' }, p: 2, m: 2, borderRadius: 2, width: '270px' }}>Start Writing Today</Button>
          <Button variant="outlined" component={Link} to="/lgscrn" sx={{ mt: 4, color: 'white', border: '1px solid white', '&:hover': { backgroundColor: '#bcbcbcff' }, p: 2, m: 2, borderRadius: 2, width: '270px', textAlign: 'center' }}>I Already have an account</Button>
        </Box>
        {/* Buttons for mobile screen */}
        <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' }, flexDirection: 'column', alignItems: 'center' }}>
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