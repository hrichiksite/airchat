// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateSlug } from "random-word-slugs";
import jsonwebtoken from "jsonwebtoken";
import { createClient } from 'redis';
import { promisify } from "util";



type Data = [
    {
        id: number;
        message: string;
        sender: string;
    },
    ];

    const client = createClient({
      url: process.env.REDIS_URL,
    });


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await client.connect();

  // generate a random name for the user and send it as a response
// get chat
//remove the last message if length is greater than 30
//@ts-ignore
//get the chat
const getdata = await client.get('chat');
const jsondata = JSON.parse(getdata);
if(jsondata.length > 30){
  jsondata.shift();
}
//update the chat
const setdata = await client.set('chat', JSON.stringify(jsondata));
console.log(setdata);
//send the response
res.status(200).json(getdata);
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