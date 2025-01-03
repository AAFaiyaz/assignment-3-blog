import { Schema, model, connect } from 'mongoose';
import { User } from './user/user.interface';

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: `{VALUE} is not supported`,
      },
      default: 'user', // Default value set to "user"
    },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// 3. Create a Model.
export const UserModel = model<User>('User', userSchema);
