// module imports
import { Router } from 'express';

// file imports
import nameRoutes from './nameRoutes.js';

// variable initialization
const router = Router();

router.use('/data', nameRoutes);

export default router;
