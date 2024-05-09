// module imports
const asyncHandler = require('express-async-handler');

// file imports
const modelName = require('../models/nameModel');
const ErrorResponse = require('../utils/error-response');


// @desc   Get Data
// @route  GET /api/v1/data
// @access Public
exports.getData = asyncHandler(async (req, res, next) => {
  const data = await modelName.find({});
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});

// @desc   Get Single Data
// @route  GET /api/v1/data/:id
// @access Public
exports.getSingleData = asyncHandler(async (req, res, next) => {
  const data = await modelName.findById(req.params.id);
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});

// @desc   Set Data
// @route  POST /api/v1/data
// @access Public
exports.setData = asyncHandler(async (req, res, next) => {
  const data = await modelName.create(req.body);
  if (!data) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(data);
});

// @desc   Update Data
// @route  PUT /api/v1/data/:id
// @access Public
exports.updateData = asyncHandler(async (req, res, next) => {
  const data = await modelName.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!data) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(data);
});

// @desc   Delete Data
// @route  DELETE /api/v1/data/:id
// @access Public
exports.deleteData = asyncHandler(async (req, res, next) => {
  const data = await modelName.findByIdAndDelete(req.params.id);
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});
