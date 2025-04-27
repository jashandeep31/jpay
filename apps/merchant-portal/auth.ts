import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@repo/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    // async session({ session, user, token }) {
    //   console.log(`user ${user}`);
    //   console.log(`session ${session}`);
    //   console.log(`token ${token}`);
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   console.log(`token ${token}`);
    //   console.log(`user ${user}`);
    //   console.log(`account ${account}`);
    //   console.log(`profile ${profile}`);
    //   console.log(`isNewUser ${isNewUser}`);
    //   return token;
    // },
  },
});
