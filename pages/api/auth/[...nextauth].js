import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {},
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
};
