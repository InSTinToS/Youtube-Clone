import { DefaultResType } from 'types/next'

import { ObjectId } from 'mongodb'

interface Video {
  _id: ObjectId
  views: number
  title: string
  thumbnail: string
  channelName: string
}

export interface REQ_GET_Video {}
export interface REQ_POST_Video {
  videos: Omit<Video, '_id'>[]
}
export interface REQ_PUT_Video {
  videos: Video[]
}
export interface REQ_DELETE_Video {
  videosIds: ObjectId[]
}

export interface RES_GET_Video extends DefaultResType {
  videos?: Video[]
}
export interface RES_POST_Video extends DefaultResType {
  videos?: Video[]
}
export interface RES_PUT_Video extends DefaultResType {
  videos?: Video[]
}
export interface RES_DELETE_Video extends DefaultResType {
  deletedCount?: number
}

export default Video
