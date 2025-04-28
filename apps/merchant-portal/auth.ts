import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    merchantId: string;
    user: {
      id: string;
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
  adapter: PrismaAdapter(db),
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async session({ session, user, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        const merchant = await db.merchant.upsert({
          where: {
            userId: session.user.id,
          },
          update: {},
          create: {
            userId: session.user.id,
            name: session.user.name || "Default name",
            email: session.user.email,
            logoUrl: session.user.image || "Default image",
          },
        });
        session.merchantId = merchant.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
});
