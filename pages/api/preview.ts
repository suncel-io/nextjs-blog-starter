import type { NextApiRequest, NextApiResponse } from "next";

const preview = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});
  res.redirect(req.query.slug as string);
};

export default preview;
