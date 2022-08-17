import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret === process.env.SECRET) {
    res.status(200).json({ auth: true });
    return;
  }

  res.status(200).json({ auth: false });
};

export default handler;
