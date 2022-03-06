import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/StockToUser/StockToUsersCell'

const DELETE_STOCK_TO_USER_MUTATION = gql`
  mutation DeleteStockToUserMutation($id: Int!) {
    deleteStockToUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const StockToUsersList = ({ stockToUsers }) => {
  const [deleteStockToUser] = useMutation(DELETE_STOCK_TO_USER_MUTATION, {
    onCompleted: () => {
      toast.success('StockToUser deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stockToUser ' + id + '?')) {
      deleteStockToUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Stock id</th>
            <th>Ticker</th>
            <th>Name</th>
            <th>Number of stocks</th>
            <th>Price</th>
            <th>Total amount</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stockToUsers.map((stockToUser) => (
            <tr key={stockToUser.id}>
              <td>{truncate(stockToUser.id)}</td>
              <td>{truncate(stockToUser.userId)}</td>
              <td>{truncate(stockToUser.stockId)}</td>
              <td>{truncate(stockToUser.ticker)}</td>
              <td>{truncate(stockToUser.name)}</td>
              <td>{truncate(stockToUser.numberOfStocks)}</td>
              <td>{truncate(stockToUser.price)}</td>
              <td>{truncate(stockToUser.totalAmount)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stockToUser({ id: stockToUser.id })}
                    title={'Show stockToUser ' + stockToUser.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStockToUser({ id: stockToUser.id })}
                    title={'Edit stockToUser ' + stockToUser.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete stockToUser ' + stockToUser.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stockToUser.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockToUsersList
