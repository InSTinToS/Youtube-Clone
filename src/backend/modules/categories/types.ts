import { ObjectId } from 'mongodb'

type CategoryGQL = Omit<GQL.ICategory, '__typename'>

interface CategoryCollection extends Omit<CategoryGQL, '_id'> {
  _id: ObjectId
}

type GetCategories = () => Promise<CategoryCollection[]>

type AddCategories = (
  newCategories: Omit<CategoryGQL, '_id'>[]
) => Promise<CategoryCollection[]>

type UpdateCategories = (
  updatedCategories: CategoryGQL[]
) => Promise<CategoryCollection[]>

type DeleteCategories = (
  categoriesToDelete: CategoryGQL[]
) => Promise<{ deletedCount: number }>

export type {
  AddCategories,
  GetCategories,
  UpdateCategories,
  DeleteCategories,
  CategoryCollection
}
