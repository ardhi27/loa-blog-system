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

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const { categoryName } = body;

    if (!categoryName) {
      return NextResponse.json(
        { message: "Category name is required!", status: 400 },
        { status: 400 }
      );
    }

    const isCategoryExisted = await prisma.postCategory.findFirst({
      where: {
        categoryName: categoryName,
      },
    });

    if (isCategoryExisted) {
      return NextResponse.json(
        { message: "Category already existed", status: 400 },
        { status: 400 }
      );
    }

    const createCategory = await prisma.postCategory.create({
      data: {
        categoryName: categoryName,
      },
    });
    return NextResponse.json(
      {
        message: "Category created succesfully!",
        status: 201,
        data: createCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category", error);
    return NextResponse.json(
      {
        message: "Error creating category",
        status: 500,
      },
      { status: 500 }
    );
  }
};
