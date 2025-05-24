// module imports
const router = require('express').Router();

// file imports
const nameRoutes = require('./nameRoutes');

router.use('/data', nameRoutes);

module.exports = router;
