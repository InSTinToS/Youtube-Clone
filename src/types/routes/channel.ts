import { DefaultResType } from 'types/next'

import { ObjectId } from 'mongodb'

interface Channel {
  _id: ObjectId
  logo: string
  name: string
}

export interface REQ_GET_Channel {}
export interface REQ_POST_Channel {
  channels: Omit<Channel, '_id'>[]
}
export interface REQ_PUT_Channel {
  channels: Channel[]
}
export interface REQ_DELETE_Channel {
  channelsIds: ObjectId[]
}

export interface RES_GET_Channel extends DefaultResType {
  channels?: Channel[]
}
export interface RES_POST_Channel extends DefaultResType {
  channels?: Channel[]
}
export interface RES_PUT_Channel extends DefaultResType {
  channels?: Channel[]
}
export interface RES_DELETE_Channel extends DefaultResType {
  deletedCount?: number
}

export default Channel
