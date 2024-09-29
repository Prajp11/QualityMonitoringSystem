// src/components/Dashboard/Alerts.jsx
import React from 'react';
import { Alert, Paper, Typography } from '@mui/material';

function Alerts({ alerts }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Alerts & Notifications
      </Typography>
      {alerts.map((alert, index) => (
        <Alert severity={alert.type} key={index} sx={{ mb: 1 }}>
          {alert.message}
        </Alert>
      ))}
    </Paper>
  );
}

export default Alerts;
