import { ApolloServer } from 'apollo-server-micro'
import resolvers from 'backend/graphql/resolvers'
import typeDefs from 'backend/graphql/typeDefs'
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export const config = {
  api: { bodyParser: false }
}

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export default cors(handler)
