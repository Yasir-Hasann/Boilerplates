// module imports
import { Router } from 'express';

// file imports
import * as nameController from '../controllers/nameController.js';

// variable initialization
const router = Router();

router.route('/').get(nameController.getData).post(nameController.addData);
router.route('/:id').get(nameController.getSingleData);
router.route('/:id').patch(nameController.updateData).delete(nameController.deleteData);

export default router;
