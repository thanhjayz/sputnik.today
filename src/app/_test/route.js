import NextAuth from 'next-auth';
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();
export const authOptions = {
    
    //adapter
    adapter: PrismaAdapter(prisma),

    //provider cung cấp khả năng xác thực
    providers: [
        //Tự xác minh đăng nhập là credentials
        Credentials({
            credentials: {
              username: { label: "Username" },
              password: { label: "Password", type: "password" },
            },
            async authorize({ request }) {
              const response = await fetch(request)
              if (!response.ok) return null
              return (await response.json()) ?? null
            },
        }),
        //Xác minh đăng nhập thông qua 1 bên ủy quyền như google, facebook, github
        Google({
            authorization: {
              params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
              },
            },
          }),

    ],

    //Khi người dùng đăng nhập thành công, NextAuth.js tạo một phiên làm việc (session) để duy trì trạng thái đăng nhập. Cách phiên làm việc được tạo và quản lý phụ thuộc vào cấu hình của bạ
    session: {
      strategy: "jwt", //thiết lập chiến lược xác thực, chẳng hạn như sử dụng JWT hay các phiên làm việc dựa trên cookie, ví dụ: strategy: "database", nếu để là "jwt", bắt buộc phải khai báo jwt option như dưới, và phải có biến secret, nếu không sẽ xảy ra lỗi
      maxAge: 30 * 24 * 60 * 60, // 30 days, Thời gian tồn tại của phiên làm việc, tính bằng giây
      updateAge: 24 * 60 * 60, // 24 hours, Thời gian sau khi phiên làm việc cần được cập nhật lại
      //generateSessionToken = Tạo ra một token duy nhất cho mỗi phiên làm việc, giúp bảo mật và duy trì tính toàn vẹn của phiên.
      generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex") //
      }
    },

    //Bảo mật JWT: Nếu bạn sử dụng JWT (JSON Web Token) trong NextAuth.js, secret là khóa bí mật dùng để ký và xác thực các JWT. JWT chứa thông tin về người dùng, và việc ký JWT với secret đảm bảo rằng không ai có thể giả mạo hoặc chỉnh sửa JWT mà không biết khóa bí mật này. Khi NextAuth.js tạo một token hoặc một session, nó sử dụng secret để mã hóa thông tin bên trong. Điều này có nghĩa là ngay cả khi ai đó truy cập vào dữ liệu này, họ sẽ không hiểu được nội dung mà không có secret.
    secret: process.env.NEXTAUTH_SECRET,

    //Pages trong NextAuth.js cho phép bạn tùy chỉnh đường dẫn (URLs) của các trang đăng nhập, đăng xuất, và các trang xác thực khác.
    pages: {
        signIn: "/login",
        signOut: "/logout"
    },

    debug: process.env.NODE_ENV === "development",

}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

