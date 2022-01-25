import { MongoClient } from 'mongodb'

const connectToMongoDB = async () => {
  const client = new MongoClient(process.env.URI)
  const connection = await client.connect()

  return { db: connection.db('youtubeClone') }
}

export default connectToMongoDB
