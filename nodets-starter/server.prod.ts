// module imports
import cluster from 'node:cluster';
import * as os from 'node:os';
import server from './src/app.js';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking for ${numCPUs} CPUs`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
    }
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    for (const id in cluster.workers) {
      cluster.workers[id]?.send('shutdown');
    }
  });
} else {
  server.create();
  server.start();
  console.log(`Worker ${process.pid} started`);
}

process.on('uncaughtException', (error: Error) => {
  console.error(`${new Date().toISOString()} Uncaught Exception:`, error.message);
  console.error(error.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.error(`${new Date().toISOString()} Unhandled Rejection at:`, promise);
  console.error('Reason:', reason);
  process.exit(1);
});
