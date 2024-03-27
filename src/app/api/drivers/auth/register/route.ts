import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const encryptedPassword = await hashPassword(data.password);

  const driver = await prisma.driver.create({
    data: {
      username: data.username,
      password: encryptedPassword,
    },
  });

  const dateOfBirth = new Date(data.tanggalLahir).toISOString();

  const profile = await prisma.driverProfile.create({
    data: {
      driverId: driver.id,
      fullName: data.fullName,
      phone: data.phone,
      operationalArea: data.daop,
      address: data.alamat,
      nationalId: data.nik,
      placeOfBirth: data.tempatLahir,
      dateOfBirth: dateOfBirth,
      licenseNumber: data.platNomer,
    },
  });

  return NextResponse.json({ driver, profile });
}
