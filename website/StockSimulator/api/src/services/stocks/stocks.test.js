import { stocks, stock, createStock, updateStock, deleteStock } from './stocks'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stocks', () => {
  scenario('returns all stocks', async (scenario) => {
    const result = await stocks()

    expect(result.length).toEqual(Object.keys(scenario.stock).length)
  })

  scenario('returns a single stock', async (scenario) => {
    const result = await stock({ id: scenario.stock.one.id })

    expect(result).toEqual(scenario.stock.one)
  })

  scenario('creates a stock', async () => {
    const result = await createStock({
      input: {
        ticker: 'String3415325',
        name: 'String',
        currentPrice: 5145601.175688066,
      },
    })

    expect(result.ticker).toEqual('String3415325')
    expect(result.name).toEqual('String')
    expect(result.currentPrice).toEqual(5145601.175688066)
  })

  scenario('updates a stock', async (scenario) => {
    const original = await stock({ id: scenario.stock.one.id })
    const result = await updateStock({
      id: original.id,
      input: { ticker: 'String4785512' },
    })

    expect(result.ticker).toEqual('String4785512')
  })

  scenario('deletes a stock', async (scenario) => {
    const original = await deleteStock({ id: scenario.stock.one.id })
    const result = await stock({ id: original.id })

    expect(result).toEqual(null)
  })
})
