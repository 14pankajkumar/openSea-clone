import type { NextApiRequest, NextApiResponse } from 'next'

const graphQuery = (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .redirect(
      'https://api-ap-south-1.graphcms.com/v2/ckz4nful10a9u01z90j0n29zb/master'
    )
}

export default graphQuery
