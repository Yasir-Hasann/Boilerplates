// module imports
import mongoose, { Document, Schema } from 'mongoose';

export interface IName extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const nameSchema = new Schema<IName>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

export default mongoose.model<IName>('name', nameSchema);
