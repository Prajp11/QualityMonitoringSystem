// src/components/Common/Footer.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box className="footer">
      <Typography variant="body2">
        © {new Date().getFullYear()} Quality Monitoring System. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
