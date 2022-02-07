import {
  AddUser,
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
  UserCollection
} from './types'

import connectToMongoDB from 'backend/db'

import { ObjectId } from 'mongodb'

const getUser: GetUser = async userId => {
  let { db } = await connectToMongoDB()

  const user = await db
    .collection<UserCollection>('users')
    .findOne({ _id: new ObjectId(userId) })

  return user
}

const getUsers: GetUsers = async () => {
  let { db } = await connectToMongoDB()
  const users = await db.collection<UserCollection>('users').find({}).toArray()
  return users
}

const addUser: AddUser = async user => {
  const newId = new ObjectId()
  let { db } = await connectToMongoDB()

  await db
    .collection<UserCollection>('users')
    .insertOne({ ...user, _id: newId })

  const addedUser = await db
    .collection<UserCollection>('users')
    .findOne({ _id: newId })

  return addedUser
}

const updateUser: UpdateUser = async user => {
  let { db } = await connectToMongoDB()

  const userId = user._id

  delete user._id

  const { value: updatedUser } = await db
    .collection<UserCollection>('users')
    .findOneAndReplace(
      { _id: new ObjectId(userId) },
      { ...user },
      { returnDocument: 'after' }
    )

  return updatedUser
}

const deleteUser: DeleteUser = async userId => {
  let { db } = await connectToMongoDB()

  const { value: deletedUser } = await db
    .collection<UserCollection>('users')
    .findOneAndDelete({ _id: new ObjectId(userId) })

  return deletedUser
}

export { addUser, updateUser, deleteUser, getUser, getUsers }
