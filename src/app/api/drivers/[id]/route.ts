import { NextResponse } from "next/server";

type Id = string | undefined;

export async function GET(request: Request, context: { params: { id: Id } }) {
  return NextResponse.json({
    message: `Hello from the driver route with ID: ${context.params.id}`,
  });
}
