export const schema = gql`
  type Stock {
    id: Int!
    ticker: String!
    name: String!
    currentPrice: Float!
  }

  type Query {
    stocks: [Stock!]! @requireAuth
    stock(id: Int!): Stock @requireAuth
  }

  input CreateStockInput {
    ticker: String!
    name: String!
    currentPrice: Float!
  }

  input UpdateStockInput {
    ticker: String
    name: String
    currentPrice: Float
  }

  type Mutation {
    createStock(input: CreateStockInput!): Stock! @requireAuth
    updateStock(id: Int!, input: UpdateStockInput!): Stock! @requireAuth
    deleteStock(id: Int!): Stock! @requireAuth
  }
`
