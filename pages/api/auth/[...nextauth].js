import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import connectMongoose from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import { verifyPassword } from '../../../utils/hashPassword';
import { getUser } from '../../../utils/accountRequest';

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

        const user = await User.findOne({ email: email }).select('+password');

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

  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Fetch UserProfile from DB
      await connectMongoose();
      const userProfile = await User.findOne({ email: token?.email });

      const userData = await getUser(userProfile?._id);

      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.profile = userData;

      return session;
    },
  },
};

export default NextAuth(authOptions);
