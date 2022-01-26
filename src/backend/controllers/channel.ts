import { NextRouteType } from 'types/next'
import Channel, {
  REQ_POST_Channel,
  REQ_PUT_Channel,
  RES_GET_Channel,
  RES_POST_Channel,
  RES_PUT_Channel
} from 'types/routes/channel'

import connectToMongoDB from 'backend/db'
import { ObjectId } from 'mongodb'

const getChannel: NextRouteType<RES_GET_Channel> = async (_req, res) => {
  try {
    let { db } = await connectToMongoDB()

    const channels = await db.collection<Channel[]>('channel').findOne()

    return res.json({ channels, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addChannel: NextRouteType<RES_POST_Channel> = async (req, res) => {
  try {
    const { channels }: REQ_POST_Channel = req.body

    let { db } = await connectToMongoDB()

    await db
      .collection<Channel>('channel')
      .insertMany(
        channels.map(channel => ({ _id: new ObjectId(), ...channel }))
      )

    return res.json({ success: true })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

// const updateChannel: NextRouteType<RES_PUT_Channel> = async (req, res) => {
//   try {
//     const { channels }: REQ_PUT_Channel = req.body

//     let { db } = await connectToMongoDB()

//     await db
//       .collection<Channel>('channel')
//       .findOneAndReplace({ id: channels._id }, { logo: channels.})

//     return res.json({ success: true })
//   } catch (error) {
//     return res.json({ success: false, message: new Error(error).message })
//   }
// }

export {
  // getChannel,
  // updateChannel,
  addChannel
}
