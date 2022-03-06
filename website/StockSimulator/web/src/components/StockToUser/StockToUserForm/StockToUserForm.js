import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const StockToUserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.stockToUser?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.stockToUser?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="stockId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stock id
        </Label>

        <NumberField
          name="stockId"
          defaultValue={props.stockToUser?.stockId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stockId" className="rw-field-error" />

        <Label
          name="ticker"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ticker
        </Label>

        <TextField
          name="ticker"
          defaultValue={props.stockToUser?.ticker}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ticker" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.stockToUser?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="numberOfStocks"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of stocks
        </Label>

        <NumberField
          name="numberOfStocks"
          defaultValue={props.stockToUser?.numberOfStocks}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numberOfStocks" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.stockToUser?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="totalAmount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total amount
        </Label>

        <TextField
          name="totalAmount"
          defaultValue={props.stockToUser?.totalAmount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="totalAmount" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StockToUserForm
