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
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', apiRouter);
app.use('/ping', (_req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Bro: I am live and working' });
});
app.all('/{*splat}', (_req: Request, res: Response) => {
  res.status(400).json({ success: false, message: 'Invalid URL' });
});
app.use(errorHandler);

export default app;
