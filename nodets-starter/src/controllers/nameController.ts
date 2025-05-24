// module imports
import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// file imports
import modelName from '../models/nameModel.js';
import ErrorResponse from '../utils/error-response.js';

// @desc   Get Data
// @route  GET /api/v1/get-data
// @access Public
export const getData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await modelName.find({});
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});

// @desc   Get Single Data
// @route  GET /api/v1/get-data/:id
// @access Public
export const getSingleData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await modelName.findById(req.params.id);
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});

// @desc   Add Data
// @route  POST /api/v1/add-data
// @access Public
export const addData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await modelName.create(req.body);
  if (!data) return next(new ErrorResponse('Something went wrong', 500));

  res.status(201).json(data);
});

// @desc   Update Data
// @route  PUT /api/v1/update-data/:id
// @access Public
export const updateData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await modelName.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!data) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(data);
});

// @desc   Delete Data
// @route  DELETE /api/v1/delete-data/:id
// @access Public
export const deleteData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await modelName.findByIdAndDelete(req.params.id);
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});
