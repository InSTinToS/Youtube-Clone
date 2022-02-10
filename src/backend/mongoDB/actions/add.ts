import getAll from '../../utils/getAll'

import connectToMongoDB from 'backend/mongoDB'

import { ObjectId } from 'mongodb'

const add = async ({ data, collection, returnAll }) => {
  if (!data) return null

  const { db } = await connectToMongoDB()
  const addedIds = []
  const dataWithIds = data.map(dataItem => ({
    _id: new ObjectId(),
    ...dataItem
  }))

  const { insertedCount, insertedIds } = await db
    .collection(collection)
    .insertMany(dataWithIds)

  for (let i = 0; i < insertedCount; i++) addedIds.push(insertedIds[i])

  const addedData = await db
    .collection(collection)
    .find({ _id: { $in: addedIds } })
    .toArray()

  return { addedData, all: getAll({ collection, db, returnAll }) }
}

export default add
