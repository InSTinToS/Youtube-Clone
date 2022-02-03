const resolvers = {
  Query: {
    user: () => ({ avatar: 'test' })
  }
}

module.exports = { resolvers }
