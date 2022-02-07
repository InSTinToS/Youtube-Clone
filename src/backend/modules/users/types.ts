import { ObjectId } from 'mongodb'

type UserGQL = Omit<GQL.IUser, '__typename'>

interface UserCollection extends Omit<UserGQL, '_id'> {
  _id: ObjectId
}

type GetUsers = () => Promise<UserCollection[]>
type AddUser = (user: UserGQL) => Promise<UserCollection>
type GetUser = (userId: string) => Promise<UserCollection>
type UpdateUser = (user: UserGQL) => Promise<UserCollection>
type DeleteUser = (userId: string) => Promise<UserCollection>

export type {
  GetUser,
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser,
  UserCollection
}
