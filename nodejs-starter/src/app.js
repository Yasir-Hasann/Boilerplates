// module imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// file imports
const errorHandler = require('./middleware/error-handler');
const apiRouter = require('./routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1', apiRouter);
app.use('/ping', (req, res) => {
  res.status(200).json({ success: true, message: 'Bro: I am live and working' });
});
app.all('/{*splat}', (req, res) => {
  res.status(400).json({ success: false, message: 'Invalid URL' });
});
app.use(errorHandler);

module.exports = app;
