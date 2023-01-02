import mongoose from 'mongoose';

const connectMongoose = () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  mongoose.connect(process.env.NEXT_PUBLIC_DATABASE, {}, (err) => {
    if (err) throw err;
  });
};

export default connectMongoose;
