import getAll from '../../utils/getAll'

import connectToMongoDB from 'backend/mongoDB'

import { ObjectId } from 'mongodb'

const remove = async ({ data, collection, returnAll }) => {
  if (!data) return null

  const { db } = await connectToMongoDB()

  const formatIdsToDelete = data.map(id => new ObjectId(id))

  const deletedData = await db
    .collection(collection)
    .find({ _id: { $in: formatIdsToDelete } })
    .toArray()

  await db
    .collection(collection)
    .deleteMany({ _id: { $in: formatIdsToDelete } })

  return { deletedData, all: getAll({ collection, db, returnAll }) }
}

export default remove
