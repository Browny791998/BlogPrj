import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    session: {
        strategy: "jwt", // Use JWT strategy if preferred
    },
    callbacks: {
        async session({ session, user }) {
          // Attach user ID to session
            return session;
        },
    },
};

// Helper function for getting the session server-side
export const getAuthSession = async () => await getServerSession(authOptions);
