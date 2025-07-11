// module imports
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// file imports
import errorHandler from './middleware/error-handler.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1', apiRouter);
app.use('/ping', (_req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Bro: I am live and working' });
});
app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Invalid URL' });
});
app.use(errorHandler);

export default app;
