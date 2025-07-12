import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  try {
    const params = await request.json();
    const { categoryId } = params;
    const deleteCategory = await prisma.postCategory.delete({
      where: {
        categoryId: categoryId,
      },
    });
    return NextResponse.json(
      {
        message: "Category deleted succesfully",
        status: 201,
        data: deleteCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error deleting category", error);
    return NextResponse.json(
      {
        message: "Error Deleting category",
        status: 500,
      },
      { status: 500 }
    );
  }
};
