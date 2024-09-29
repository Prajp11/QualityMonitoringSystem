// src/components/Common/Navbar.jsx
import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button'; // Ensure Button is imported
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quality Monitoring System
        </Typography>
        {user ? (
          <>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {user.username}
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account"
              onClick={handleLogout}
            >
              <AccountCircle />
            </IconButton>
          </>
        ) : (
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
