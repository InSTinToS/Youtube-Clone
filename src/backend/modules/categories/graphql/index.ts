import {
  addCategories,
  deleteCategories,
  getCategories,
  updateCategories
} from '../categories'

import { Resolvers } from '@apollo/client'

const resolvers: Resolvers = {
  Query: {
    categories: getCategories
  },
  Mutation: {
    addCategories: (_, { newCategories }) => addCategories(newCategories),
    updateCategories: (_, { updatedCategories }) =>
      updateCategories(updatedCategories),
    deleteCategories: (_, { categoriesToDelete }) =>
      deleteCategories(categoriesToDelete)
  }
}

export default resolvers
