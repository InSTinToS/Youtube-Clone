import { NextApiHandler } from 'next'

import {
  REQ_GET_Users,
  REQ_POST_User,
  REQ_PUT_User,
  RES_GET_Users,
  RES_POST_User,
  RES_PUT_User
} from 'types/routes/user'

import {
  addUser as addUserService,
  deleteUser as deleteUserService,
  getUser as getUserService,
  getUsers as getUsersService,
  updateUser as updateUserService
} from 'backend/services/user'

const getUsers: NextApiHandler<RES_GET_Users> = async (req, res) => {
  try {
    const { _id } = req.body as REQ_GET_Users

    const user = await (_id ? getUserService(_id) : getUsersService())

    return res.json({ user, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addUser: NextApiHandler<RES_POST_User> = async (req, res) => {
  try {
    const { user }: REQ_POST_User = req.body

    const addedUser = await addUserService(user)

    return res.json({ success: true, user: addedUser })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const updateUser: NextApiHandler<RES_PUT_User> = async (req, res) => {
  try {
    const { user }: REQ_PUT_User = req.body

    const updatedUser = await updateUserService(user)

    return res.json({ success: true, user: updatedUser })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const deleteUser: NextApiHandler<RES_PUT_User> = async (req, res) => {
  try {
    const { user }: REQ_PUT_User = req.body

    const updatedUser = await deleteUserService(user._id)

    return res.json({ success: true, user: updatedUser })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

export { addUser, getUsers, updateUser, deleteUser }
