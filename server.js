const express = require('express');
const app = express();

app.get ('/api/notes', (req, res) => {
  res.send('Hey Hey');
})


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });