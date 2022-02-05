import userResolvers from './modules/users/resolvers'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const resolvers = mergeResolvers([userResolvers])

const typeDefs = mergeTypeDefs(
  loadFilesSync(
    path.join(process.cwd(), 'src', 'backend', 'graphql', 'modules'),
    { extensions: ['gql'] }
  )
)

const graphql = { typeDefs, resolvers }

export default graphql
