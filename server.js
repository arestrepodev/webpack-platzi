const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/external', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'external/index.html'));
});

app.listen(3000);
