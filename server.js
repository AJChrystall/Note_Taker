const express = require('express');
const app = express();

// Allow the server to parse JSON requests
app.use(express.json());

// Define the routes
app.get('/', (req, res) => {
  res.send('Welcome to the Note Taker App!');
});

app.get('/notes', (req, res) => {
  res.send('List of notes');
});

app.post('/notes', (req, res) => {
  console.log(req.body);
  res.send('Note added successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
