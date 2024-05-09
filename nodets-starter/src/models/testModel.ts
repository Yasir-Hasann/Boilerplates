// module imports
import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Test', TestSchema);
