import { DefaultResType } from 'types/next'

import { ObjectID } from 'bson'

interface User {
  _id: ObjectID
  avatar: string
}

export interface REQ_GET_User {}
export interface REQ_POST_User {
  user: {
    avatar: string
  }
}
export interface REQ_PUT_User extends DefaultResType {
  user: User
}

export interface RES_GET_User extends DefaultResType {
  user?: User
}
export interface RES_POST_User extends DefaultResType {}
export interface RES_PUT_User extends DefaultResType {}

export default User
