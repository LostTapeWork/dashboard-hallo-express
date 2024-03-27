import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json({
    username: data.username,
    password: data.password,
  });
}

export async function GET(request: Request) {
  const drivers = await prisma.driverProfile.findMany({
    where: {
      driver: {
        status: "active",
      },
    },
    select: {
      fullName: true,
      phone: true,
      operationalArea: true,
      licenseNumber: true,
      driver: {
        select: {
          status: true,
        },
      },
    },
  });

  return NextResponse.json({ drivers });
}
