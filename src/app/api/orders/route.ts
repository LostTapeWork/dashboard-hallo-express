import errorHandler from "@/lib/error-handler";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await axios.get(
      "https://api.upos-conn.com/master/v1.3/api/PosTransaksi-showByType/9/3",
      {
        headers: {
          "x-api-key": process.env.UPOS_API_KEY,
          // Replace with your actual API key
        },
      }
    );

    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json(errorHandler(error), { status: 400 });
  }
}
