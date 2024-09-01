// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";
import jsonwebtoken from "jsonwebtoken";
import { createClient } from 'redis';
import { promisify } from "util";
import { json } from "stream/consumers";


type Data = {
  ack: boolean;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const client = createClient({
    url: process.env.REDIS_URL,
    legacyMode: true,
  });
  await client.connect();

  //get token, message from the request
  console.log(typeof req.body)
  const { token, message } = JSON.parse(req.body);
  // verify the token
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  console.log(token);
  const payload = jsonwebtoken.verify(token, secret);
  // store the message in redis
  //@ts-ignore
  //as a list
  //get the chat
  const getdata = await client.get('chat');
  //@ts-ignore
  const jsondata = JSON.parse(getdata);
  if (jsondata.length > 30) {
    jsondata.shift();
  }
  //@ts-ignore
  jsondata.push({ message, sender: payload.name });
  const setdata = await client.set('chat', jsondata);
  console.log(setdata);
  //@ts-ignore
  // send the response
  res.status(200).json({ ack: true, status: "Message sent" });
}
// append('chat', JSON.stringify({ message, sender: payload.name }));