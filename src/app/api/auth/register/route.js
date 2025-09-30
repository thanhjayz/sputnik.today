import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log("name :", name);
    console.log("email :", email);
    console.log("password :", password);
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email đã tồn tại" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.User.create({
      data: { name, email, password: hashedPassword, role: "user" },
    });
    return NextResponse.json({ message: "Đăng ký thành công", user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred while registering the user." }, { status: 500 });
  }
}


// export async function GET()
