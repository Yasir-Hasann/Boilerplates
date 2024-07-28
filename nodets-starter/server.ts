// module imports
import cors from 'cors';
import express, { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';

// file imports
import connectDB from './src/config/db';
import './src/config/env-config';
import errorHandler from './src/middlewares/error-handler';
import indexRouter from './src/routes';

// variable initializations
const app = express();
const port = process.env.PORT || 5001;

// connect the Mongodb Database
connectDB();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public/', express.static(path.join('dist/public/')));
app.use(cors());
app.use(logger('dev'));

// mount routes
app.use('/api/v1/', indexRouter);
app.use('/docs', (req: Request, res: Response) => {
  res.sendFile(`${__dirname}/public/docs.html`);
});
app.use('/ping', (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'Bro: I am live and Working' });
});
app.all('/*', (req: Request<never>, res: Response<{ success: boolean; message: string }>) => {
  res.json({ success: false, message: 'Invalid URL' });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

console.log(process.env.NODE_ENV?.toUpperCase());
