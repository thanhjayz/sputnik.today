//Import PrismaClient từ package @prisma/client. / const { PrismaClient } = require("@prisma/client");
import { PrismaClient } from "@prisma/client";

let prisma;
//Nếu đang ở production (môi trường thật), tạo mới một instance PrismaClient mỗi lần app chạy.
if (process.env.NODE_ENV === "production") {
  //tạo đối tượng PrismaClient
  prisma = new PrismaClient();
} else {
  //Nếu không phải production → tức là đang development (phát triển), ta sẽ dùng một biến toàn cục (global.prisma) để lưu PrismaClient.
  //global là object toàn cục trong Node.js
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export { prisma };

/*
Development:
  Code reload → prisma instance vẫn dùng lại từ globalThis.prisma
Production:
  Code chạy → tạo mới PrismaClient mỗi lần
*/
