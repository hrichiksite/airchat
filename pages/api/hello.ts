// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";
import jsonwebtoken from "jsonwebtoken";
type Data = {
  name: string;
  token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // generate a random name for the user and send it as a response
  const name = generateSlug();
  const payload = {
    name,
  };
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  const token = jsonwebtoken.sign(payload, secret);
  res.status(200).json({ name, token });
}
