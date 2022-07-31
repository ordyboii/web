import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.token === process.env.TOKEN) {
    res.status(200).json({ auth: true });
    return;
  }

  res.status(200).json({ auth: false });
}
