// module imports
const express = require('express');

// file imports
const namesRoutes = require('./nameRoutes');

// variable initializations
const router = express.Router();

router.use('/data', namesRoutes);

module.exports = router;
