import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StockToUserForm from 'src/components/StockToUser/StockToUserForm'

const CREATE_STOCK_TO_USER_MUTATION = gql`
  mutation CreateStockToUserMutation($input: CreateStockToUserInput!) {
    createStockToUser(input: $input) {
      id
    }
  }
`

const NewStockToUser = () => {
  const [createStockToUser, { loading, error }] = useMutation(
    CREATE_STOCK_TO_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('StockToUser created')
        navigate(routes.stockToUsers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      userId: parseInt(input.userId),
      stockId: parseInt(input.stockId),
    })
    createStockToUser({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StockToUser</h2>
      </header>
      <div className="rw-segment-main">
        <StockToUserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStockToUser
