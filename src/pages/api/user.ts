import { addUser, getUser, updateUser } from 'backend/controllers/user'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getUser(req, res)

    case 'POST':
      return addUser(req, res)

    case 'PUT':
      updateUser(req, res)
  }
}
