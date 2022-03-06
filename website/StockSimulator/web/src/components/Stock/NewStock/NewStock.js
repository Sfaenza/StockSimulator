import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StockForm from 'src/components/Stock/StockForm'

const CREATE_STOCK_MUTATION = gql`
  mutation CreateStockMutation($input: CreateStockInput!) {
    createStock(input: $input) {
      id
    }
  }
`

const NewStock = () => {
  const [createStock, { loading, error }] = useMutation(CREATE_STOCK_MUTATION, {
    onCompleted: () => {
      toast.success('Stock created')
      navigate(routes.stocks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createStock({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Stock</h2>
      </header>
      <div className="rw-segment-main">
        <StockForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStock
