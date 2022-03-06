export const schema = gql`
  type StockToUser {
    id: Int!
    user: User!
    userId: Int!
    stockId: Int!
    ticker: String!
    name: String!
    numberOfStocks: Int!
    price: String!
    totalAmount: Float!
  }

  type Query {
    stockToUsers: [StockToUser!]! @requireAuth
    stockToUser(id: Int!): StockToUser @requireAuth
  }

  input CreateStockToUserInput {
    userId: Int!
    stockId: Int!
    ticker: String!
    name: String!
    numberOfStocks: Int!
    price: String!
    totalAmount: Float!
  }

  input UpdateStockToUserInput {
    userId: Int
    stockId: Int
    ticker: String
    name: String
    numberOfStocks: Int
    price: String
    totalAmount: Float
  }

  type Mutation {
    createStockToUser(input: CreateStockToUserInput!): StockToUser! @requireAuth
    updateStockToUser(id: Int!, input: UpdateStockToUserInput!): StockToUser!
      @requireAuth
    deleteStockToUser(id: Int!): StockToUser! @requireAuth
  }
`
