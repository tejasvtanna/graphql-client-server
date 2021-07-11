import gql from 'graphql-tag'

export const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`

export const GET_EMOJIS = gql`
  {
    emojis {
      url
    }
  }
`
