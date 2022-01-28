import { NextApiHandler } from 'next'

import { addUser, getUser, updateUser } from 'backend/controllers/user'

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getUser(req, res)

    case 'POST':
      return addUser(req, res)

    case 'PUT':
      return updateUser(req, res)
  }
}

export default handler
