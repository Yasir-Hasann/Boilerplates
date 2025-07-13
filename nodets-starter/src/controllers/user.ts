// module imports
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// file imports
import { UserModel } from '@models/index.js';
import ErrorResponse from '@utils/error-response.js';

// @desc   Get All Users
// @route  GET /api/v1/user/get-all-users
// @access Public
const getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const users = await UserModel.find({});
  if (!users) return next(new ErrorResponse('No users found', 404));

  res.status(200).json(users);
});

// @desc   Get Single User
// @route  GET /api/v1/user/get-single-user/:id
// @access Public
const getSingleUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) return next(new ErrorResponse('No user found', 404));

  res.status(200).json(user);
});

// @desc   Add User
// @route  POST /api/v1/user/add-user
// @access Public
const addUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserModel.create(req.body);
  if (!user) return next(new ErrorResponse('Something went wrong', 500));

  res.status(201).json(user);
});

// @desc   Update User
// @route  PATCH /api/v1/user/update-user/:id
// @access Public
const updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(user);
});

// @desc   Delete User
// @route  DELETE /api/v1/user/delete-user/:id
// @access Public
const deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  if (!user) return next(new ErrorResponse('No user found', 404));

  res.status(200).json(user);
});

export default {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};
