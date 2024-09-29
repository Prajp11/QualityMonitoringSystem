// src/components/Supplies/SuppliesTable.jsx
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

function SuppliesTable() {
  const [supplies, setSupplies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await axios.get('/api/supplies/');
        setSupplies(response.data);
      } catch (error) {
        console.error('Error fetching supplies:', error);
      }
    };

    fetchSupplies();
  }, []);

  const filteredSupplies = supplies.filter((supply) =>
    supply.batchNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <TextField
        label="Search by Batch Number"
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
              <TableCell>Supplier</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Received Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSupplies.map((supply) => (
              <TableRow key={supply.id}>
                <TableCell>{supply.batchNumber}</TableCell>
                <TableCell>{supply.productType}</TableCell>
                <TableCell>{supply.supplier}</TableCell>
                <TableCell>{supply.quantity}</TableCell>
                <TableCell>{supply.receivedDate}</TableCell>
                <TableCell>{supply.expiryDate}</TableCell>
                <TableCell>{supply.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                    View
                  </Button>
                  <Button variant="contained" size="small" color="error">
                    Reject
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

export default SuppliesTable;
