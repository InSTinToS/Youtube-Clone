import { NextRouteType } from 'types/next'
import Channel, {
  REQ_DELETE_Channel,
  REQ_POST_Channel,
  REQ_PUT_Channel,
  RES_DELETE_Channel,
  RES_GET_Channel,
  RES_POST_Channel,
  RES_PUT_Channel
} from 'types/routes/channel'

import connectToMongoDB from 'backend/db'
import { ObjectId } from 'mongodb'

const getChannels: NextRouteType<RES_GET_Channel> = async (_req, res) => {
  try {
    let { db } = await connectToMongoDB()

    const channels = await db.collection<Channel>('channels').find().toArray()

    return res.json({ channels, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addChannels: NextRouteType<RES_POST_Channel> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { channels }: REQ_POST_Channel = req.body

    const newChannels = channels.map(channel => ({
      _id: new ObjectId(),
      ...channel
    }))

    const { insertedCount, insertedIds } = await db
      .collection<Channel>('channels')
      .insertMany(newChannels)

    const newIds = []

    for (let i = 0; i < insertedCount; i++) newIds.push(insertedIds[i])

    const updatedChannels = await db
      .collection<Channel>('channels')
      .find({ _id: { $in: newIds } })
      .toArray()

    return res.json({ success: true, channels: updatedChannels })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const updateChannels: NextRouteType<RES_PUT_Channel> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { channels }: REQ_PUT_Channel = req.body

    const modifiedValues = []

    for (let i = 0; i < channels.length; i++) {
      const { value } = await db
        .collection<Channel>('channels')
        .findOneAndReplace(
          { _id: new ObjectId(channels[i]._id) },
          { logo: channels[0].logo, name: channels[0].name },
          { returnDocument: 'after' }
        )

      modifiedValues.push(value)
    }

    return res.json({ success: true, channels: modifiedValues })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const removeChannels: NextRouteType<RES_DELETE_Channel> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { channelsIds }: REQ_DELETE_Channel = req.body

    const channelsObjectIds = channelsIds.map(channel => new ObjectId(channel))

    const { deletedCount } = await db
      .collection<Channel>('channels')
      .deleteMany({ _id: { $in: channelsObjectIds } })

    return res.json({ success: true, deletedCount })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

export { addChannels, getChannels, removeChannels, updateChannels }
