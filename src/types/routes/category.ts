import { DefaultResType } from 'types/next'

import { ObjectId } from 'mongodb'

interface Category {
  _id: ObjectId
  label: string
}

export interface REQ_GET_Category {}
export interface REQ_POST_Category {
  categories: Omit<Category, '_id'>[]
}
export interface REQ_PUT_Category {
  categories: Category[]
}
export interface REQ_DELETE_Category {
  categoriesIds: ObjectId[]
}

export interface RES_GET_Category extends DefaultResType {
  categories?: Category[]
}
export interface RES_POST_Category extends DefaultResType {
  categories?: Category[]
}
export interface RES_PUT_Category extends DefaultResType {
  categories?: Category[]
}
export interface RES_DELETE_Category extends DefaultResType {
  deletedCount?: number
}

export default Category
