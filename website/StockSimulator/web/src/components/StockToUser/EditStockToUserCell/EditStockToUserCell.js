import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import StockToUserForm from 'src/components/StockToUser/StockToUserForm'

export const QUERY = gql`
  query EditStockToUserById($id: Int!) {
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
const UPDATE_STOCK_TO_USER_MUTATION = gql`
  mutation UpdateStockToUserMutation(
    $id: Int!
    $input: UpdateStockToUserInput!
  ) {
    updateStockToUser(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ stockToUser }) => {
  const [updateStockToUser, { loading, error }] = useMutation(
    UPDATE_STOCK_TO_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('StockToUser updated')
        navigate(routes.stockToUsers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      userId: parseInt(input.userId),
      stockId: parseInt(input.stockId),
    })
    updateStockToUser({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit StockToUser {stockToUser.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StockToUserForm
          stockToUser={stockToUser}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
