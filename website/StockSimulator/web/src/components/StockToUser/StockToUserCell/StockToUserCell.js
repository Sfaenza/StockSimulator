import StockToUser from 'src/components/StockToUser/StockToUser'

export const QUERY = gql`
  query FindStockToUserById($id: Int!) {
    stockToUser: stockToUser(id: $id) {
      id
      userId
      stockId
      ticker
      name
      numberOfStocks
      price
      totalAmount
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StockToUser not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ stockToUser }) => {
  return <StockToUser stockToUser={stockToUser} />
}
