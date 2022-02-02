const express = require('express');
const fs = require('fs');
const path = require('path')
const notes = require('./db/db.json')
// const routes = require('./routes/route')

const PORT = process.env.PORT || 3000;
const app = express();



app.get ('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body =

  res.json(notes);
});

// app.delete ???

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});