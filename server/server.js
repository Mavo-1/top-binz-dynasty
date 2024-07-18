const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
// const teamRoutes = require('./routes/teamRoutes');
// const seasonRoutes = require('./routes/seasonRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
// app.use('/api/teams', teamRoutes);
// app.use('/api/seasons', seasonRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
