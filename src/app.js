const express = require('express');
const app = express();

app.use(express.json());

// Endpoint 1: Healthcheck
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Endpoint 2: Logika Sederhana (Kalkulasi)
app.post('/api/math/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Parameter a dan b harus berupa angka' });
  }
  res.status(200).json({ result: a + b });
});

module.exports = app;