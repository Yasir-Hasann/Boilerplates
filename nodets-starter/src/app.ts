// module imports
import chalk from 'chalk';
import cors from 'cors';
import express, { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import http from 'node:http';

// file imports
import connectDB from './config/connect-db.js';
import './config/env-config.js';
import errorHandler from './middlewares/error-handler.js';
import apiRouter from './routes/index.js';

// variable initializations
const app = express();
const port = process.env.PORT || 5001;

// Initialize HTTP server
const server = http.createServer(app);

const create = () => {
  connectDB();

  const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 500,
    message: 'Too many requests, please try again later.',
  });

  app.use(cors());
  app.use(helmet());
  app.use(limiter);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  app.use('/api/v1', apiRouter);
  app.use('/ping', (_req: Request, res: Response) => {
    res.status(200).json({ success: true, message: 'Bro: I am live and working' });
  });
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ success: false, message: 'Invalid URL' });
  });
  app.use(errorHandler);
};

const start = () => {
  server.listen(port, () => {
    console.log(chalk.green(`🚀 Server is running on port: ${port}`));
    console.log(chalk.blue(`🌍 Environment: ${process.env.NODE_ENV?.toUpperCase()}`));
  });
};

// Graceful shutdown handlers
const shutdown = (signal: any) => {
  console.log(chalk.yellow(`⚠️ Received ${signal}. Shutting down gracefully...`));
  server.close(async err => {
    if (err) {
      console.error(chalk.red(`❌ Error during shutdown:`, err));
      process.exit(1);
    }

    try {
      await mongoose.connection.close();
      console.log(chalk.green(`✅ MongoDB Connection Closed.`));
    } catch (dbErr) {
      console.error(chalk.red(`❌ Error closing MongoDB:`, dbErr));
    }

    console.log(chalk.green(`👋 Closed all connections. Exiting now.`));
    process.exit(0);
  });

  setTimeout(() => {
    console.error(chalk.red(`⏰ Forcing shutdown...`));
    process.exit(1);
  }, 30000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('unhandledRejection', (reason, promise) => console.error(chalk.red(`⚠️ Unhandled Rejection at:`, promise, 'reason:', reason)));
process.on('uncaughtException', err => console.error(chalk.red(`💥 Uncaught Exception:`, err)));

export default {
  create,
  start,
};
