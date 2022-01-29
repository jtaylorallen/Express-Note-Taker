const express = require('express');
const app = express();
const notes = require('./db/db.json')
// const routes = require('./routes/route')

const PORT = process.env.PORT || 3000;

app.get ('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  
});

// app.delete ???

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});