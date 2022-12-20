import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import connectMongoose from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import { verifyPassword } from '../../../utils/hashPassword';
import { getUser } from '../../../utils/apiData/userRequest';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        await connectMongoose();

        const user = await User.findOne({ email }).select('+password');

        if (!user || user === null) {
          throw new Error('No user found with this email');
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error('Invalid password, please try again!');
        }

        if (!user.active) {
          throw new Error(
            'This user is inactive, please contact us to activate your account.'
          );
        }

        return user;
      },
    }),

    CredentialsProvider({
      id: 'walletAddress',
      credentials: {},
      async authorize(credentials, req) {
        const { walletAddress } = credentials;
        await connectMongoose();

        const user = await User.findOne({ walletAddress });

        if (!user) {
          throw new Error('Your wallet address is not registered.');
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
