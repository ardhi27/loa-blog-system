import prisma from "@/lib/client";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

const hashPassword = (plainPassword: string) => {
  return bcrypt.hash(plainPassword, 10);
};
//Create Account
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (!username) {
      return NextResponse.json(
        { message: "Username must required", status: 400 },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: "Password must required!", status: 400 },
        { status: 400 }
      );
    }

    const isUsernameExisted = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (isUsernameExisted) {
      return NextResponse.json(
        {
          message: "Username already existed!",
          status: 400,
        },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const createUserData = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        userRole: "USER",
      },
    });
    return NextResponse.json({
      message: "Create data succesfully!",
      status: 201,
      data: createUserData,
    });
  } catch (error) {
    console.log("Something was error", error);
    return NextResponse.json(
      { message: "Something error", status: 500 },
      { status: 500 }
    );
  }
};
