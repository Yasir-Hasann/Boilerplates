// file imports
require('./src/config/env-config');
const app = require('./src/app');
const connectDB = require('./src/config/database');

// variable initialization
const port = process.env.PORT || 5001;

// connect to database
connectDB();

let a = '122';
a = 13;

app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV?.toUpperCase()}`);
});
