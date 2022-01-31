import { NextApiHandler } from 'next'

import {
  addVideos,
  getVideos,
  removeVideos,
  updateVideos
} from 'backend/controllers/video'

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getVideos(req, res)

    case 'POST':
      return addVideos(req, res)

    case 'PUT':
      return updateVideos(req, res)

    case 'DELETE':
      return removeVideos(req, res)
  }
}

export default handler
