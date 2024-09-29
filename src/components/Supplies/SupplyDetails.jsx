// src/components/Supplies/SupplyForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';

function SupplyForm() {
  const [supply, setSupply] = useState({
    batchNumber: '',
    productType: '',
    supplier: '',
    quantity: '',
    receivedDate: '',
    expiryDate: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSupply({ ...supply, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API endpoint
      const response = await axios.post('/api/supplies/', supply);
      setSuccess('Supply added successfully!');
      setError('');
      setSupply({
        batchNumber: '',
        productType: '',
        supplier: '',
        quantity: '',
        receivedDate: '',
        expiryDate: '',
      });
    } catch (err) {
      setError('Failed to add supply. Please check the details.');
      setSuccess('');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add New Supply
      </Typography>
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Batch Number"
          name="batchNumber"
          value={supply.batchNumber}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Product Type"
          name="productType"
          value={supply.productType}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Supplier"
          name="supplier"
          value={supply.supplier}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={supply.quantity}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Received Date"
          name="receivedDate"
          type="date"
          value={supply.receivedDate}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          type="date"
          value={supply.expiryDate}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default SupplyForm;
