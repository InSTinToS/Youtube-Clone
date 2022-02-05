import { ObjectId } from 'mongodb'

interface User {
  _id: ObjectId
  avatar: string
}

interface UpdateUser {
  updateUser: User
}

interface UpdateUserVariables {
  user: User
}

interface GetUser {
  user?: User
  users?: User[]
}

interface GetUserVariables {
  _id?: ObjectId
}

export type { User, UpdateUser, UpdateUserVariables, GetUser, GetUserVariables }
