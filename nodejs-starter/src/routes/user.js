// module imports
const router = require('express').Router();

// file imports
const { userController } = require('@controllers/index');

router.post('/add-user', userController.addUser);
router.get('/get-all-users', userController.getAllUsers);
router.get('/get-single-user/:id', userController.getSingleUser);
router.patch('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
