import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import connectMongoose from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import { verifyPassword } from '../../../utils/hashPassword';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectMongoose();

        const user = await User.findOne({ email: email });

        if (!user) {
          throw Error('No user found with this email');
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw Error('Invalid password, please try again!');
        }

        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: '/auth',
  // },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
};

export default NextAuth(authOptions);
