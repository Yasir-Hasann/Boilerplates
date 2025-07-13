// module imports
import { Router } from 'express';

// file imports
import user from './user.js';

// variable initializations
const router = Router();

router.use('/user', user);

export default router;
