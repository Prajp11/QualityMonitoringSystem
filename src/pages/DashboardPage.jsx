// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import StatsOverview from '../components/Dashboard/StatsOverview';
import RecentActivities from '../components/Dashboard/RecentActivities';
import Alerts from '../components/Dashboard/Alerts';
import axios from 'axios';

function DashboardPage() {
  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch dashboard data from backend
    const fetchData = async () => {
      try {
        const statsResponse = await axios.get('/api/dashboard/stats/');
        const activitiesResponse = await axios.get('/api/dashboard/activities/');
        const alertsResponse = await axios.get('/api/dashboard/alerts/');

        setStats(statsResponse.data);
        setActivities(activitiesResponse.data);
        setAlerts(alertsResponse.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
      <Box>
        <StatsOverview stats={stats} />
        <RecentActivities activities={activities} />
        <Alerts alerts={alerts} />
      </Box>
    </Container>
  );
}

export default DashboardPage;
