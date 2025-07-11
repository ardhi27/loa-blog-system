import prisma from "@/lib/client";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.postCategory.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error Taking Data!", error);
    return NextResponse.json({
      message: "Error Taking Data",
      status: 500,
    });
  }
};
