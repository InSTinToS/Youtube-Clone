import { add, get, remove, update } from 'backend/mongoDB/actions'

import { Resolvers } from '@apollo/client'

const resolvers: Resolvers = {
  Query: {
    users: () => get('users')
  },
  Mutation: {
    addUsers: (_, { params }) =>
      add({
        collection: 'users',
        returnAll: params.returnAll,
        data: params.usersToAdd
      }),
    updateUsers: (_, { params }) =>
      update({
        collection: 'users',
        returnAll: params.returnAll,
        data: params.usersToUpdate,
        fields: ['avatar', 'name']
      }),
    deleteUsers: (_, { params }) =>
      remove({
        collection: 'users',
        returnAll: params.returnAll,
        data: params.idsToDelete
      })
  }
}

export default resolvers
