import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import { Session } from "inspector/promises";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        //lấy dữ liệu user từ db về
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        // nếu ko tìm thấy user, trả về ng dùng lỗi, còn thấy thì trả về người dùng
        if (!user) {
          throw new Error("Invalid credentials");
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        //kiểm tra mật khẩu
        if (!isValid) {
          throw new Error("Invalid credentials");
        }
        //nếu đúng thì return user
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});
