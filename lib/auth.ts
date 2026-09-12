import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Demo-only login. TODO(Wave 1): prisma.user.findUnique + bcrypt + StoreMember.
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "EcomPlat Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (email === "demo@ecom-plat.com" && password === "demo123")
          return { id: "demo-owner", name: "Sneha (Demo Owner)", email, role: "STORE_OWNER" } as any;
        if (email === "admin@ecom-plat.com" && password === "admin123")
          return { id: "root-admin", name: "Platform Admin", email, role: "SUPERADMIN" } as any;
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) (token as any).role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      (session.user as any).role = (token as any).role;
      return session;
    },
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
};
