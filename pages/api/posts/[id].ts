import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });
  res.status(200).json(post);
}
