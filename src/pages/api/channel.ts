import { NextApiHandler } from 'next'

import {
  addChannels,
  getChannels,
  removeChannels,
  updateChannels
} from 'backend/controllers/channel'

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getChannels(req, res)

    case 'POST':
      return addChannels(req, res)

    case 'PUT':
      return updateChannels(req, res)

    case 'DELETE':
      return removeChannels(req, res)
  }
}

export default handler
