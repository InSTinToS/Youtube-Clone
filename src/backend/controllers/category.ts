import { NextApiHandler } from 'next'

import Category, {
  REQ_DELETE_Category,
  REQ_POST_Category,
  REQ_PUT_Category,
  RES_DELETE_Category,
  RES_GET_Category,
  RES_POST_Category,
  RES_PUT_Category
} from 'types/routes/category'

import connectToMongoDB from 'backend/db'

import { ObjectId } from 'mongodb'

const getCategories: NextApiHandler<RES_GET_Category> = async (_req, res) => {
  try {
    let { db } = await connectToMongoDB()

    const categories = await db
      .collection<Category>('categories')
      .find()
      .toArray()

    return res.json({ categories, success: true })
  } catch (error) {
    return res.json({ message: new Error(error).message, success: false })
  }
}

const addCategories: NextApiHandler<RES_POST_Category> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { categories }: REQ_POST_Category = req.body

    const newCategories = categories.map(category => ({
      _id: new ObjectId(),
      ...category
    }))

    const { insertedCount, insertedIds } = await db
      .collection<Category>('categories')
      .insertMany(newCategories)

    const newIds = []

    for (let i = 0; i < insertedCount; i++) newIds.push(insertedIds[i])

    const updatedCategories = await db
      .collection<Category>('categories')
      .find({ _id: { $in: newIds } })
      .toArray()

    return res.json({ success: true, categories: updatedCategories })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const updateCategories: NextApiHandler<RES_PUT_Category> = async (req, res) => {
  try {
    const { db } = await connectToMongoDB()
    const { categories }: REQ_PUT_Category = req.body

    const modifiedValues = []

    for (let i = 0; i < categories.length; i++) {
      const { value } = await db
        .collection<Category>('categories')
        .findOneAndReplace(
          { _id: new ObjectId(categories[i]._id) },
          { label: categories[i].label },
          { returnDocument: 'after' }
        )

      modifiedValues.push(value)
    }

    return res.json({ success: true, categories: modifiedValues })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

const removeCategories: NextApiHandler<RES_DELETE_Category> = async (
  req,
  res
) => {
  try {
    const { db } = await connectToMongoDB()
    const { categoriesIds }: REQ_DELETE_Category = req.body

    const categoriesObjectIds = categoriesIds.map(
      category => new ObjectId(category)
    )

    const { deletedCount } = await db
      .collection<Category>('categories')
      .deleteMany({ _id: { $in: categoriesObjectIds } })

    return res.json({ success: true, deletedCount })
  } catch (error) {
    return res.json({ success: false, message: new Error(error).message })
  }
}

export { addCategories, getCategories, removeCategories, updateCategories }
