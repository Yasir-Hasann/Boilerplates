// module imports
import express from 'express';

// file imports
import test from './testRoute';

// variable initializations
const router = express.Router();

router.use('/test', test);

export default router;