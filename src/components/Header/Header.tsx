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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => handleNavigation('/projects')}>Projects</Button>
          <Button color="inherit" onClick={() => handleNavigation('/art')}>Art</Button>
          <Button color="inherit" onClick={() => handleNavigation('/')}>About Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
