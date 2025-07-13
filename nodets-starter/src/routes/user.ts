// module imports
import { Router } from 'express';

// file imports
import { userController } from '@controllers/index.js';

// variable initializations
const router = Router();

router.post('/add-user', userController.addUser);
router.get('/get-all-users', userController.getAllUsers);
router.get('/get-single-user/:id', userController.getSingleUser);
router.patch('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

export default router;
