import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const typeDefsArray = loadFilesSync(
  path.join(process.cwd(), 'src', 'backend', 'graphql', 'modules'),
  { extensions: ['gql'] }
)

export default mergeTypeDefs(typeDefsArray)
