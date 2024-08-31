const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config/.env' });

// Initialize Express
const app = express();
app.use(express.json());

// Connect to MongoDB
const connectdb = process.env.MONGODB_URL
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes (we'll add more routes later)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
