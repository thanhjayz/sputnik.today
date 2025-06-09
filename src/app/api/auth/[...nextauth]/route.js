import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Session } from "inspector/promises";

const prisma = new PrismaClient();
export const authOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            Credentials: {
                username: { label : "Username", type : "text", placeholder: "Email hoặc số điện thoại" },
                passwork: { label : "Password", type : "password", placeholder: "Mật khẩu" }
            },
            async authorize(credentials) {

            },
        }),
    ],
    Session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",

}

const handler = NextAuth(authOptions)

export default NextAuth(authOptions)    
export { handler as GET, handler as POST }
















// export default async function auth(req, res) {
//     const providers = [
//       CredentialsProvider(...),
//       GoogleProvider(...),
//     ]
  
//     const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")
  
//     // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
//     if (isDefaultSigninPage) providers.pop()
  
//     return await NextAuth(req, res, {
//       providers
//     })
//   }