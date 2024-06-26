// module imports
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected : ${conn.connection.host}`);
   } catch (error) {
      console.log('Connected Error : ', error);
      process.exit(1);
   }
};

module.exports = connectDB;

