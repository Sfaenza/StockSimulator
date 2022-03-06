import Stock from 'src/components/Stock/Stock'

export const QUERY = gql`
  query FindStockById($id: Int!) {
    stock: stock(id: $id) {
      id
      ticker
      name
      currentPrice
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stock not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ stock }) => {
  return <Stock stock={stock} />
}
