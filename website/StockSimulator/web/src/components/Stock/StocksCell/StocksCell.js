import { Link, routes } from '@redwoodjs/router'

import Stocks from 'src/components/Stock/Stocks'

export const QUERY = gql`
  query FindStocks {
    stocks {
      id
      ticker
      name
      currentPrice
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stocks yet. '}
      <Link to={routes.newStock()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ stocks }) => {
  return <Stocks stocks={stocks} />
}
