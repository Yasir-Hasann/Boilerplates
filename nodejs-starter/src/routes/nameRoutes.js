// module imports
const express = require('express');

// file imports
const { setData, getData, updateData, deleteData, getSingleData } = require('../controllers/nameController');

// variable initializations
const router = express.Router();

router.route('/').get(getData).post(setData);
router.route('/:id').get(getSingleData);
router.route('/:id').put(updateData).delete(deleteData);

module.exports = router;
