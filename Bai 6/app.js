const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  // For parsing JSON data in requests
require('dotenv').config();

const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Connect to MongoDB (replace with your connection string)
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Body parser middleware  
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);  // Mount routes under /api prefix (optional)

const port = process.env.PORT || 3000;  // Use environment variable or default port 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});