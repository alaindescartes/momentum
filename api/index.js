require('dotenv').config(); // Explicitly load .env from root
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./userRouter/auth');

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only requests from this origin
    credentials: true,
  })
); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRouter); //auth routes

// Start the server
const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  console.log(err);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
