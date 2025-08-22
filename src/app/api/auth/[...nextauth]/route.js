import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DbConnect, { collectionobj } from "@/lib/DbConnect";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        // Connect to your MongoDB collection
        const usersCollection = await DbConnect(collectionobj.userCollection);

        // Find user by email
        const user = await usersCollection.findOne({ email });
        if (!user) return null;

        // Plain text password check
        if (password !== user.password) return null;

        // Return safe user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user; // include user info in JWT
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user; // pass user info to client
      return session;
    },
  },
});

export { handler as GET, handler as POST };
