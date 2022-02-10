import { add, get, remove, update } from 'backend/mongoDB/actions'

import { Resolvers } from '@apollo/client'

const resolvers: Resolvers = {
  Query: { categories: () => get('categories') },
  Mutation: {
    addCategories: (_, { params }) =>
      add({
        collection: 'categories',
        returnAll: params.returnAll,
        data: params.categoriesToAdd
      }),
    updateCategories: (_, { params }) =>
      update({
        collection: 'categories',
        returnAll: params.returnAll,
        data: params.categoriesToUpdate,
        fields: ['label']
      }),
    deleteCategories: (_, { params }) =>
      remove({
        collection: 'categories',
        returnAll: params.returnAll,
        data: params.idsToDelete
      })
  }
}

export default resolvers
