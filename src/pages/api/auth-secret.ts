import { NextApiRequest, NextApiResponse } from "next";

export default function authSecret(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret === process.env.SECRET) {
    res.status(200).json({ auth: true });
    return;
  }

  res.status(200).json({ auth: false });
}
