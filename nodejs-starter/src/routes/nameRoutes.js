// module imports
const router = require('express').Router();

// file imports
const nameController = require('../controllers/nameController');

router.route('/').get(nameController.getData).post(nameController.addData);
router.route('/:id').get(nameController.getSingleData);
router.route('/:id').patch(nameController.updateData).delete(nameController.deleteData);

module.exports = router;
