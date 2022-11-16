import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

// import { signinRequest } from '../../../utils/authRequest';
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

        try {
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
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
    // CredentialsProvider({
    //   id: 'credentials',
    //   name: 'credentials',
    //   credentials: {},
    //   async authorize(credentials, req) {
    //     const { email, password } = credentials;

    //     try {
    //       const res = await signinRequest({ email, password });
    //       // console.log(res);
    //       console.log(res.status);
    //       if (res.status === 401) {
    //         throw new Error('Invalid email or password, please try again.');
    //       }

    //       const user = res.data.user;

    //       if (res.status === 200 && user) {
    //         return user;
    //       }

    //       return null;
    //     } catch (err) {
    //       console.error(err);

    //       return null;
    //     }
    //   },
    // }),
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
