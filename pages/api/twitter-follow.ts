import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch(
    `https://api.swo.moe/stats/twitter/dingyi`,
    {
      method: 'GET',
    }
  )

  const data = await result.json()

  return res.status(200).json({
    count: data.count
  })

}