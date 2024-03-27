import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;

  return response.status(200).json({ id });
}
