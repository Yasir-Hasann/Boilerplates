// module imports
const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.green(`✅ MongoDB Connected to: ${chalk.cyan(conn.connection.host)}`));
  } catch (error) {
    console.error(chalk.red(`❌ MongoDB Connection Error:`, error));
    process.exit(1);
  }
};

module.exports = connectDB;
