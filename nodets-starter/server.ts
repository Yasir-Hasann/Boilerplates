// file imports
import app from './src/app.js';
import connectDB from './src/config/database.js';
import './src/config/env-config.js';

// variable initialization
const port = process.env.PORT || 5001;

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV?.toUpperCase()}`);
});
