// src/components/Reports/Reports.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';
import axios from 'axios';

function Reports() {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [report, setReport] = useState(null); // To display success message
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  const generateReport = async () => {
    try {
      const response = await axios.post('/api/reports/generate/', dateRange, {
        responseType: 'blob', // Important for file downloads
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf'); // or 'report.xlsx'
      document.body.appendChild(link);
      link.click();
      setReport('Report generated successfully!'); // Utilize setReport
      setError('');
    } catch (error) {
      setError('Error generating report.');
      setReport(null);
    }
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Generate Reports
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Start Date"
          name="start"
          type="date"
          value={dateRange.start}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          label="End Date"
          name="end"
          type="date"
          value={dateRange.end}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Box>
      <Button variant="contained" color="primary" onClick={generateReport}>
        Generate Report
      </Button>
      {report && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {report}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Paper>
  );
}

export default Reports;
