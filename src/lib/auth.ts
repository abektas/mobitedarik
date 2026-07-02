import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// For development without a database, use a simple in-memory user store
// In production, this will be replaced with Prisma + PostgreSQL
const DEMO_USERS = [
  {
    id: "a1",
    email: "ali@mobitech.com",
    name: "Ali Yılmaz",
    password: "demo1234",
    role: "alici",
    firmaId: "a1",
    firmaAdi: "Mega Mobilya Sanayi A.Ş.",
  },
  {
    id: "t1",
    email: "info@mdfplus.com",
    name: "Mehmet Kaya",
    password: "demo1234",
    role: "tedarikci",
    firmaId: "t1",
    firmaAdi: "MDFPlus Sanayi A.Ş.",
  },
  {
    id: "admin1",
    email: "admin@mobitedarik.com",
    name: "Admin Kullanıcı",
    password: "admin1234",
    role: "admin",
    firmaId: "",
    firmaAdi: "MobiTedarik Platform",
  },
  {
    id: "super1",
    email: "super@mobitedarik.com",
    name: "Super Admin",
    password: "super1234",
    role: "superadmin",
    firmaId: "",
    firmaAdi: "MobiTedarik Sistem",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "E-posta", type: "email" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = DEMO_USERS.find(u => u.email === credentials.email as string);
        if (!user) return null;

        // For demo, use plain text comparison; in production use bcrypt
        const isValid = user.password === credentials.password as string;
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          firmaId: user.firmaId,
          firmaAdi: user.firmaAdi,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.firmaId = (user as any).firmaId;
        token.firmaAdi = (user as any).firmaAdi;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).firmaId = token.firmaId;
        (session.user as any).firmaAdi = token.firmaAdi;
      }
      return session;
    },
  },
  pages: {
    signIn: "/giris",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
