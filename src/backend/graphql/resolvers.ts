import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'
import path from 'path'

const resolversArray = loadFilesSync(
  path.join(
    process.cwd(),
    'src',
    'backend',
    'graphql',
    'modules',
    '**',
    'resolvers.js'
  )
)

export default mergeResolvers(resolversArray)
