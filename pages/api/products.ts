import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.product.findMany()
  res.json(posts)
}
