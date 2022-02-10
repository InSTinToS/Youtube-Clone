import { MongoClient } from 'mongodb'

const connectToMongoDB = async () => {
  const client = new MongoClient(process.env.URI)
  const connection = await client.connect()

  const db = connection.db(process.env.DB_NAME)

  return { db }
}

export default connectToMongoDB
