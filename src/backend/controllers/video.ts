import { NextRouteType } from 'types/next'
import Video, {
  REQ_DELETE_Video,
  REQ_POST_Video,
  REQ_PUT_Video,
  RES_DELETE_Video,
  RES_GET_Video,
  RES_POST_Video,
  RES_PUT_Video
} from 'types/routes/video'
import Channel from 'types/routes/channel'

import connectToMongoDB from 'backend/db'
import { ObjectId } from 'mongodb'

const getVideos: NextRouteType<RES_GET_Video> = async (_req, res) => {
  try {
    let { db } = await connectToMongoDB()

    const videos: Video[] = await db
      .collection<Video>('videos')
      .aggregate<Video>([
        {
          $lookup: {
            from: 'channels',
            localField: 'channelName',
            foreignField: 'name',
            as: 'channelInfo'
          }
        }
      ])
      .toArray()

    return res.json({ videos, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addVideos: NextRouteType<RES_POST_Video> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { videos }: REQ_POST_Video = req.body

    const newVideos = videos.map(video => ({
      _id: new ObjectId(),
      ...video
    }))

    const { insertedCount, insertedIds } = await db
      .collection<Video>('videos')
      .insertMany(newVideos)

    const newIds = []

    for (let i = 0; i < insertedCount; i++) newIds.push(insertedIds[i])

    const updatedVideos = await db
      .collection<Video>('videos')
      .find({ _id: { $in: newIds } })
      .toArray()

    return res.json({ success: true, videos: updatedVideos })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const updateVideos: NextRouteType<RES_PUT_Video> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { videos }: REQ_PUT_Video = req.body

    const modifiedValues = []

    for (let i = 0; i < videos.length; i++) {
      const { value } = await db.collection<Video>('videos').findOneAndReplace(
        { _id: new ObjectId(videos[i]._id) },
        {
          title: videos[i].title,
          views: videos[i].views,
          thumbnail: videos[i].thumbnail,
          channelName: videos[i].channelName
        },
        { returnDocument: 'after' }
      )

      modifiedValues.push(value)
    }

    return res.json({ success: true, videos: modifiedValues })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const removeVideos: NextRouteType<RES_DELETE_Video> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { videosIds }: REQ_DELETE_Video = req.body

    const videosObjectIds = videosIds.map(video => new ObjectId(video))

    const { deletedCount } = await db
      .collection<Video>('videos')
      .deleteMany({ _id: { $in: videosObjectIds } })

    return res.json({ success: true, deletedCount })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

export { addVideos, getVideos, removeVideos, updateVideos }
