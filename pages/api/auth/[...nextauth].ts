import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        try {
          const getUser = await axios.post("/api/signInUser", {
            username: username,
            password: password,
          });

          return getUser.data;
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
