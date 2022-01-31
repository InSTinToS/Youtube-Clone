import { NextApiHandler } from 'next'

import {
  addCategories,
  getCategories,
  removeCategories,
  updateCategories
} from 'backend/controllers/category'

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getCategories(req, res)

    case 'POST':
      return addCategories(req, res)

    case 'PUT':
      return updateCategories(req, res)

    case 'DELETE':
      return removeCategories(req, res)
  }
}

export default handler
