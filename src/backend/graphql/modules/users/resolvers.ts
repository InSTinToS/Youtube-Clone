import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from 'backend/services/user'

import { Resolvers } from '@apollo/client'

const resolvers: Resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { _id }) => getUser(_id)
  },
  Mutation: {
    addUser: (_, { user }) => addUser(user),
    updateUser: (_, { user }) => updateUser(user),
    deleteUser: (_, { userId }) => deleteUser(userId)
  }
}

export default resolvers
