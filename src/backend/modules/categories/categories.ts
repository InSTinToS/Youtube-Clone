import {
  AddCategories,
  CategoryCollection,
  DeleteCategories,
  GetCategories,
  UpdateCategories
} from './types'

import connectToMongoDB from 'backend/db'

import { ObjectId } from 'mongodb'

const getCategories: GetCategories = async () => {
  let { db } = await connectToMongoDB()

  const categories = await db
    .collection<CategoryCollection>('categories')
    .find()
    .toArray()

  return categories
}

const addCategories: AddCategories = async categories => {
  const { db } = await connectToMongoDB()

  const newCategories = categories.map(category => ({
    _id: new ObjectId(),
    ...category
  }))

  const { insertedCount, insertedIds } = await db
    .collection<CategoryCollection>('categories')
    .insertMany(newCategories)

  const newIds = []

  for (let i = 0; i < insertedCount; i++) newIds.push(insertedIds[i])

  const updatedCategories = await db
    .collection<CategoryCollection>('categories')
    .find({ _id: { $in: newIds } })
    .toArray()

  return updatedCategories
}

const updateCategories: UpdateCategories = async categories => {
  const { db } = await connectToMongoDB()

  const updatedCategories = []

  for (let i = 0; i < categories.length; i++) {
    const { value } = await db
      .collection<CategoryCollection>('categories')
      .findOneAndReplace(
        { _id: new ObjectId(categories[i]._id) },
        { label: categories[i].label },
        { returnDocument: 'after' }
      )

    updatedCategories.push(value)
  }

  return updatedCategories
}

const deleteCategories: DeleteCategories = async categoriesToDelete => {
  const { db } = await connectToMongoDB()
  const categoriesIds = categoriesToDelete.map(({ _id }) => new ObjectId(_id))

  const { deletedCount } = await db
    .collection<CategoryCollection>('categories')
    .deleteMany({ _id: { $in: categoriesIds } })

  return { deletedCount }
}

export { addCategories, updateCategories, deleteCategories, getCategories }
