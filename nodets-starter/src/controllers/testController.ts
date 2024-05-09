// module imports
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

// file imports
import TestModel from '../models/testModel';
import ErrorResponse from '../utils/error-response';

// @desc   Get Data
// @route  GET /api/v1/test
// @access Public
export const getData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await TestModel.find({});
  if (!data) return next(new ErrorResponse('No record found', 404));

  res.status(200).json(data);
});

// @desc   Set Data
// @route  POST /api/v1/test
// @access Public
export const setData = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await TestModel.create(req.body);
  if (!data) return next(new ErrorResponse('Something went wrong', 500));

  res.status(200).json(data);
});
