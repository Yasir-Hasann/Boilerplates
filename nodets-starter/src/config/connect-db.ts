// module imports
import chalk from 'chalk';
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is not defined');
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(chalk.green(`✅ MongoDB Connected to: ${chalk.cyan(conn.connection.host)}`));
  } catch (error) {
    console.error(chalk.red(`❌ MongoDB Connection Error:`, error));
    process.exit(1);
  }
};

export default connectDB;
