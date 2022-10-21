import mongoose, { model, models } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: [
        true,
        'Email is already registered, please try with another email.',
      ],
      lowercase: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      enum: ['buyer', 'seller', 'both', 'admin'],
      default: 'buyer',
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Please provide a password'],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const User = models.User || model('User', userSchema);

export default User;
