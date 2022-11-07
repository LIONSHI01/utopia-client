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
    walletAddress: {
      type: String,
      lowercase: true,
      trim: true,
    },
    shipping_address: {
      type: String,
      trim: true,
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
    location: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    active: {
      type: Boolean,
      default: true,
    },
    followers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    followings: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = models.User || model('User', userSchema);

export default User;
