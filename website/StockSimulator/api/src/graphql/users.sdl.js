export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    stocks: [StockToUser]!
    balance: Float!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    balance: Float!
  }

  input UpdateUserInput {
    email: String
    name: String
    balance: Float
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
