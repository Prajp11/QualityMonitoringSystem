// src/components/Inventory/InventoryTable.jsx
import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import axios from 'axios';

function InventoryTable() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('/api/inventory/');
        setInventory(response.data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);

  const filteredInventory = inventory.filter((item) =>
    item.productType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <TextField
        label="Search by Product Type"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Batch Number</TableCell>
              <TableCell>Product Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Current Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.batchNumber}</TableCell>
                <TableCell>{item.productType}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.expiryDate}</TableCell>
                <TableCell>{item.currentStock}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="contained" size="small" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default InventoryTable;
