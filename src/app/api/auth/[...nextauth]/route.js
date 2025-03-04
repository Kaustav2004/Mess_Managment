import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: { 
          scope: "openid email profile",
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET, 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
