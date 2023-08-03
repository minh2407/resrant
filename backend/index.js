const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Use CORS middleware to allow requests from the frontend (http://localhost:3000)
app.use(cors());
app.use(express.json());

// Endpoint to handle reservation submissions
app.post('/api/reservations', (req, res) => {
  const { name, email, date } = req.body;

  // In a real application, you would handle the reservation data here, e.g., save to a database.

  console.log('Received reservation:', { name, email, date });

  // Return a response to the frontend
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
