import getAll from '../../utils/getAll'

import connectToMongoDB from 'backend/mongoDB'

const get = async collection => {
  let { db } = await connectToMongoDB()

  return await getAll({ collection, db, returnAll: true })
}

export default get
