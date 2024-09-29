// src/components/Dashboard/StatsOverview.jsx
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function StatsOverview({ stats }) {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{stat.title}</Typography>
            <Typography variant="h4">{stat.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsOverview;
