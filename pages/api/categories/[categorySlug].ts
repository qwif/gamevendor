import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.query)
    const { categorySlug } = req.query

    const category = await prisma.category.findUnique({
      where: {
        slug: categorySlug.toString(),
      },
    })
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({ error })
  }
}
