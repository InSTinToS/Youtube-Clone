import { NextRouteType } from 'types/next'
import User, {
  REQ_POST_User,
  REQ_PUT_User,
  RES_GET_User,
  RES_POST_User,
  RES_PUT_User
} from 'types/routes/user'

import connectToMongoDB from 'backend/db'
import { ObjectId } from 'mongodb'

const getUser: NextRouteType<RES_GET_User> = async (_req, res) => {
  try {
    let { db } = await connectToMongoDB()
    const user = await db.collection<User>('users').findOne()

    return res.json({ user, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addUser: NextRouteType<RES_POST_User> = async (req, res) => {
  try {
    const { user }: REQ_POST_User = req.body
    let { db } = await connectToMongoDB()
    const newId = new ObjectId()

    await db.collection<User>('users').insertOne({ _id: newId, ...user })

    const updatedUser = await db
      .collection<User>('users')
      .findOne({ _id: newId })

    return res.json({ success: true, user: updatedUser })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const updateUser: NextRouteType<RES_PUT_User> = async (req, res) => {
  try {
    const { user }: REQ_PUT_User = req.body
    let { db } = await connectToMongoDB()

    const updatedUser = await db
      .collection<User>('users')
      .findOneAndReplace(
        { _id: new ObjectId(user._id) },
        { avatar: user.avatar },
        { returnDocument: 'after' }
      )

    return res.json({ success: true, user: updatedUser.value })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

export { addUser, getUser, updateUser }
