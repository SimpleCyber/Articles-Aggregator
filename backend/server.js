const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./src/config');

const searchRoutes = require('./src/routes/search.routes');
const indexRoutes = require('./src/routes/index.routes'); 

const errorHandler = require('./src/utils/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', indexRoutes);

app.use('/api/search', searchRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});