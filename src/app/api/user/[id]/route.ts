import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const idParams = params.id;
    const id = parseInt(idParams, 10);
    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      message: "Delete user succesfully!",
      status: 201,
      data: deleteUser,
    });
  } catch (error) {
    console.error("Something was error", error);
    return NextResponse.json({ message: "Something was error", status: 500 });
  }
};
