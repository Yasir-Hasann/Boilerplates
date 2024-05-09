// module imports
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// file imports
require('./config/env-config');
const connectDB = require('./config/db');
const apiRouter = require('./routes');
const errorHandler = require('./middlewares/error-handler');

// variable initializations
const app = express();
const port = process.env.PORT || 5001;

// connect to MongoDB Database
connectDB();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/public/', express.static(path.join(__dirname, 'public/')));
app.use(morgan('dev'));

// mount routes
app.use('/api/v1', apiRouter);
app.use('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/docs.html'));
});
app.use('/ping', (req, res) => {
  return res.status(200).json({ success: true, message: 'Bro: I am live and working' });
});
app.all('/*', (req, res) => {
  res.json({ success: false, message: 'Invalid URL' });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

console.log(process.env.NODE_ENV.toUpperCase());