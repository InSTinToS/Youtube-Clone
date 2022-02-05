import User from 'types/routes/user'

import connectToMongoDB from 'backend/db'

import { ObjectId } from 'mongodb'

type GetUser = (userId: ObjectId) => Promise<User>
type GetUsers = () => Promise<User[]>
type AddUser = (user: Omit<User, '_id'>) => Promise<User>
type UpdateUser = (user: User) => Promise<User>
type DeleteUser = (userId: ObjectId) => Promise<User>

const getUser: GetUser = async userId => {
  let { db } = await connectToMongoDB()

  const user = await db
    .collection<User>('users')
    .findOne({ _id: new ObjectId(userId) })

  return user
}

const getUsers: GetUsers = async () => {
  let { db } = await connectToMongoDB()
  const users = await db.collection<User>('users').find({}).toArray()
  return users
}

const addUser: AddUser = async user => {
  let { db } = await connectToMongoDB()
  const newId = new ObjectId()

  await db.collection<User>('users').insertOne({ _id: newId, ...user })

  const addedUser = await db.collection<User>('users').findOne({ _id: newId })

  return addedUser
}

const updateUser: UpdateUser = async user => {
  let { db } = await connectToMongoDB()

  const userId = user._id

  delete user._id

  const { value: updatedUser } = await db
    .collection<User>('users')
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
    .collection<User>('users')
    .findOneAndDelete({ _id: new ObjectId(userId) })

  return deletedUser
}

export { addUser, updateUser, deleteUser, getUser, getUsers }
