// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../lib/db";

export default async function handler(req, res) {
  const oUtillog = await db.utillog.findFirst();
  res.status(200).json({ oUtillog });
}
