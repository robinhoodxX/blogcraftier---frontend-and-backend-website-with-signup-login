import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

// To start first run xampp and start the Apache and MySQL modules.
// Create a database named "myapp" in phpmyadmin and create a table named "users" with the following SQL command: check out the txt file about "creating database"
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
    boxShadow: '0 4px 16px 0 rgba(255, 255, 255, 0.2)',
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
      {/* Welcome screen */}
      <Box sx={{ display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', mt: 15 }}>
        {/* Welcome Text */}
        <Box>
          <Typography variant="h3" color="initial" sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center', pt: 4, fontSize: { xs: 24, sm: 36, md: 48, lg: 48, xl: 48 } }}>Welcome to BlogCraftier</Typography>
          <Typography variant="body2" color="initial" sx={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', mt: 2, fontSize: { xs: 12, sm: 16, md: 16, lg: 16, xl: 16 } }}>Where stories come to life and creativity knows no bounds.</Typography>
        </Box>
        {/* Features */}
        <Box sx={{ display: 'flex' , alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }, alignItems: 'center', mt: 6 }}>
            <Box1 sx={{ height: { xs: '100px', sm: '180px', md: '180px', lg: '140px', xl: '140px' }, }}>
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 40, color: 'yellow' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: 16, sm: 20, md: 24, lg: 24, xl: 24 } }}>AI-Powered Writing</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white', fontSize: { xs: 12, sm: 14, md: 16, lg: 16, xl: 16 } }}>Get suggestions and enhance your content with AI</Typography>
            </Box1>
            <Box1 sx={{ height: { xs: '100px', sm: '180px', md: '180px', lg: '140px', xl: '140px' }, }}>
              <GroupOutlinedIcon sx={{ fontSize: 40, color: 'lightblue' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: 16, sm: 20, md: 24, lg: 24, xl: 24 } }}>Global Community</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white', fontSize: { xs: 12, sm: 14, md: 16, lg: 16, xl: 16 } }}>Connect with 50K+ writers worldwide</Typography>
            </Box1>
            <Box1 sx={{ height: { xs: '100px', sm: '180px', md: '180px', lg: '140px', xl: '140px' }, }}>
              <ElectricBoltOutlinedIcon sx={{ fontSize: 40, color: 'lightgreen' }} />
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: 16, sm: 20, md: 24, lg: 24, xl: 24 } }}>Instant Publishing</Typography>
              <Typography variant="h7" color="initial" sx={{ color: 'white', fontSize: { xs: 12, sm: 14, md: 16, lg: 16, xl: 16 } }}>Share your stories with one click</Typography>
            </Box1>
          </Box>
        </Box>
        {/* Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}}>
          <Button variant="contained" component={Link} to="/sgnp" sx={{ mt: 4, backgroundColor: '#ffffffff', color: 'black', '&:hover': { backgroundColor: '#cfcfcfff' }, p: 2, m: 2, borderRadius: 2, width: '270px' }}>Start Writing Today</Button>
          <Button variant="outlined" component={Link} to="./lgscrn" sx={{ mt: 4, color: 'white', border: '1px solid white', '&:hover': { backgroundColor: '#bcbcbcff' }, p: 2, m: 2, borderRadius: 2, width: '270px', textAlign: 'center' }}>I Already have an account</Button>
        </Box>
        {/* Footer Text */}
        <Box>
          <Typography variant="body2" color="initial" sx={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', mt: 9, fontSize: { xs: 10, sm: 12, md: 14, lg: 14, xl: 14 } }}>Trusted by creators from top publications worldwide</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcomescreen;