import prisma from "@/lib/prisma";
import { comparePassword } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const driver = await prisma.driver.findUnique({
    where: {
      username: data.username,
    },
  });

  if (!driver) {
    return NextResponse.json({
      message: "Invalid username or password",
    });
  }

  const isMatch = await comparePassword(data.password, driver.password);

  if (!isMatch) {
    return NextResponse.error();
  }

  return NextResponse.json({
    driver_id: driver.id,
  });
}
