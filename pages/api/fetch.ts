// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";
import jsonwebtoken from "jsonwebtoken";
import { createClient } from 'redis';
import { promisify } from "util";

const client = createClient({
  url: process.env.REDIS_URL,
});

type Data = [
    {
        id: number;
        message: string;
        sender: string;
    },
    ];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // generate a random name for the user and send it as a response
// get chat
//remove the last message if length is greater than 30
//@ts-ignore
client.json.LEN('chat', (err, len) => {
    if (len > 30) {
        //@ts-ignore
        client.json.ARRPOP('chat');
    }
    const messages = client.json.get('chat');
    //@ts-ignore
    res.status(200).json(messages);
});
}


// const name = generateSlug();
// const payload = {
//   name,
// };
// const secret = process.env.JWT_SECRET;
// if (!secret) {
//   throw new Error("JWT_SECRET is not set");
// }
// const token = jsonwebtoken.sign(payload, secret);
// res.status(200).json({ name, token });