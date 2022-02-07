import userResolvers from './modules/users/graphql'
import categoriesResolvers from './modules/categories/graphql'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const resolvers = mergeResolvers([userResolvers, categoriesResolvers])

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(process.cwd(), 'src', 'backend', 'modules'), {
    extensions: ['gql']
  })
)

const graphql = { typeDefs, resolvers }

export default graphql
