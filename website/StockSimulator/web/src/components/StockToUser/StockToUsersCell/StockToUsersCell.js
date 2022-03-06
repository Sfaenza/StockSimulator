import { Link, routes } from '@redwoodjs/router'

import StockToUsers from 'src/components/StockToUser/StockToUsers'

export const QUERY = gql`
  query FindStockToUsers {
    stockToUsers {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stockToUsers yet. '}
      <Link to={routes.newStockToUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ stockToUsers }) => {
  return <StockToUsers stockToUsers={stockToUsers} />
}
