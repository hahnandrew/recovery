import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { user_id, name } = await request.json();

    const createdUser = await prisma.user.create({
      data: {
        user_id: user_id,
        name: name,
      },
    });

    return NextResponse.json(createdUser);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
