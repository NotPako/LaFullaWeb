// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '88143040337-6vbijtc63glpc8cc1asu7ghgpfb3vrr1.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },  
});