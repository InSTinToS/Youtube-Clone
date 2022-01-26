import { DefaultResType } from 'types/next'

import { ObjectId } from 'mongodb'

interface User {
  _id: ObjectId
  avatar: string
}

export interface REQ_GET_User {}
export interface REQ_POST_User {
  user: Omit<User, '_id'>
}
export interface REQ_PUT_User {
  user: User
}

export interface RES_GET_User extends DefaultResType {
  user?: User
}
export interface RES_POST_User extends DefaultResType {
  user?: User
}
export interface RES_PUT_User extends DefaultResType {
  user?: User
}

export default User
