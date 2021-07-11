const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios')

const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
    url: String
  }

  type Emoji {
    url: String
  }

  type Query {
    users: [User]
    emojis: [Emoji]
  }
`

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users1 = await axios.get('https://api.github.com/users')
        return users1.data.map(({ id, login, avatar_url, url }) => ({
          id,
          login,
          avatar_url,
        }))
      } catch (error) {
        throw error
      }
    },
    emojis: async () => {
      try {
        const emojis = await axios.get('https://api.github.com/emojis')
        return Object.values(emojis.data).map((url) => ({
          url,
        }))
      } catch (error) {
        throw error
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

//  typeDefs: typeDefs,
//  resolvers: resolvers
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
