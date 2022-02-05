import { NextApiHandler } from 'next'

import graphql from 'backend/graphql'

import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer(graphql)

const startServer = apolloServer.start()

export const config = { api: { bodyParser: false } }

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'OPTIONS') res.end()
  else {
    await startServer
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
  }
}

export default cors(handler)
