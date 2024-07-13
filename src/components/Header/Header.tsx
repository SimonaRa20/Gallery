import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Jura', textTransform: 'none' }}>
          SimonaRa20
        </Typography>
        <Box>
          <Button color="inherit" sx={{fontFamily: 'Jura', textTransform: 'none'}} onClick={() => handleNavigation('/projects')}>Projects</Button>
          <Button color="inherit" sx={{fontFamily: 'Jura', textTransform: 'none'}} onClick={() => handleNavigation('/art')}>Art</Button>
          <Button color="inherit" sx={{fontFamily: 'Jura', textTransform: 'none'}} onClick={() => handleNavigation('/')}>About Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
