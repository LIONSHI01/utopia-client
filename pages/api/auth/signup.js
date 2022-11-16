// import connectMongoose from '../../../utils/connectMongo';
// import User from '../../../models/userModel';
// import { hashPassword } from '../../../utils/hashPassword';

// const handler = async (req, res, next) => {
//   const { username, email, password } = req.body;

//   await connectMongoose();
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     res.status(401).json({
//       status: 'failed',
//       message: 'This email is already registered, please try another one.',
//     });
//     return;
//   }

//   if (email.length === 0 || password.length === 0) {
//     res.status(401).json({
//       status: 'failed',
//       message: 'Email and password are required, please try again.',
//     });
//   }

//   const hashedPassword = await hashPassword(password);

//   const newUser = await User.create({
//     name: username,
//     email,
//     password: hashedPassword,
//   });

//   res.status(200).json({
//     status: 'success',
//     newUser,
//   });
// };

// export default handler;
