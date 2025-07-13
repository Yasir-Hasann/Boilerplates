// module imports
const asyncHandler = require('express-async-handler');

// file imports
const { UserModel } = require('@models/index');
const ErrorResponse = require('@utils/error-response');

// @desc   Get All Users
// @route  GET /api/v1/user/get-all-users
// @access Public
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await UserModel.find({});
  if (!users) return next(new ErrorResponse('No users found', 404));

  res.status(200).json(users);
});

// @desc   Get Single User
// @route  GET /api/v1/user/get-single-user/:id
// @access Public
exports.getSingleUser = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) return next(new ErrorResponse('No user found', 404));

  res.status(200).json(user);
});

// @desc   Add User
// @route  POST /api/v1/user/add-user
// @access Public
exports.addUser = asyncHandler(async (req, res, next) => {
  const user = await UserModel.create(req.body);
  if (!user) return next(new ErrorResponse('Something went wrong', 500));

  res.status(201).json(user);
});

// @desc   Update User
// @route  PATCH /api/v1/user/update-user/:id
// @access Public
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(user);
});

// @desc   Delete User
// @route  DELETE /api/v1/user/delete-user/:id
// @access Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  if (!user) return next(new ErrorResponse('No user found', 404));

  res.status(200).json(user);
});
