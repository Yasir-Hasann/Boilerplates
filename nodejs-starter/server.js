// file imports
const app = require('./src/app');
const connectDB = require('./src/config/database');
require('./src/config/env-config');

// variable initialization
const port = process.env.PORT || 5001;

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV?.toUpperCase()}`);
});
