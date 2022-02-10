import { Db } from 'mongodb'

const getAll = async ({
  collection,
  db,
  returnAll
}: {
  db: Db
  returnAll: boolean
  collection: string
}) => (returnAll ? await db.collection(collection).find().toArray() : undefined)

export default getAll
