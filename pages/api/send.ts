// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";
import jsonwebtoken from "jsonwebtoken";
import redis from "redis";
import { promisify } from "util";

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

type Data = {
  ack: boolean;
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  //get token, message from the request
    const { token, message } = req.body;
    // verify the token
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not set");
    }
    const payload = jsonwebtoken.verify(token, secret);
    // store the message in redis
    //@ts-ignore
    const setdata = client.json.ARRAPPEND('chat', JSON.stringify({ message, sender: payload.name }));
    // set the expiry time for the key
    //@ts-ignore
    // send the response
    res.status(200).json({ ack: true, status: "Message sent" });
}
