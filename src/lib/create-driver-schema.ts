import { z } from "zod";

const driverSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
  daop: z
    .string({ required_error: "DAOP is required" })
    .min(3, "DAOP must be selected"),
  platNomer: z
    .string({ required_error: "Vehicle license plate is required" })
    .min(6, "Vehicle license plate is required"),
  nik: z
    .string({ required_error: "NIK is required" })
    .min(16, "NIK is required")
    .max(16, "NIK is required"),
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(3, "Full name is required"),
  alamat: z
    .string({ required_error: "Address is required" })
    .min(3, "Address is required"),
  tempatLahir: z
    .string({ required_error: "Place of birth is required" })
    .min(3, "Place of birth is required"),
  tanggalLahir: z
    .string({ required_error: "Date of birth is required" })
    .min(3, "Date of birth is required"),
});

export { driverSchema };
