// src/components/Dashboard/RecentActivities.jsx
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function RecentActivities({ activities }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity.description} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecentActivities;
