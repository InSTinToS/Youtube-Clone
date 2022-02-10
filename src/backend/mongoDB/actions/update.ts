import getAll from '../../utils/getAll'

import connectToMongoDB from 'backend/mongoDB'

import { Document, ObjectId, WithId } from 'mongodb'

type Update = <T extends { _id: string } = any>({
  data,
  collection,
  returnAll,
  fields
}: {
  data: T[]
  collection: string
  returnAll: boolean
  fields: string[]
}) => Promise<{ all: WithId<Document>[]; updatedData: T[] }>

const update: Update = async ({ data, collection, returnAll, fields }) => {
  if (!data) return null

  const { db } = await connectToMongoDB()

  const updatedData = []

  for (let i = 0; i < data?.length; i++) {
    let objectToReplace = fields.reduce(
      (objectAcc, key) => Object.assign(objectAcc, { [key]: data[i][key] }),
      {}
    )

    const { value } = await db
      .collection(collection)
      .findOneAndReplace({ _id: new ObjectId(data[i]._id) }, objectToReplace, {
        returnDocument: 'after'
      })

    updatedData.push(value)
  }

  return { updatedData, all: await getAll({ collection, db, returnAll }) }
}

export default update
