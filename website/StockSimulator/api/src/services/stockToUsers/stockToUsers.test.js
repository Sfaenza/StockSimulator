import {
  stockToUsers,
  stockToUser,
  createStockToUser,
  updateStockToUser,
  deleteStockToUser,
} from './stockToUsers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stockToUsers', () => {
  scenario('returns all stockToUsers', async (scenario) => {
    const result = await stockToUsers()

    expect(result.length).toEqual(Object.keys(scenario.stockToUser).length)
  })

  scenario('returns a single stockToUser', async (scenario) => {
    const result = await stockToUser({ id: scenario.stockToUser.one.id })

    expect(result).toEqual(scenario.stockToUser.one)
  })

  scenario('creates a stockToUser', async (scenario) => {
    const result = await createStockToUser({
      input: {
        userId: scenario.stockToUser.two.userId,
        stockId: 9853948,
        ticker: 'String',
        name: 'String',
        numberOfStocks: 8587819,
        price: 'String',
        totalAmount: 5762748.064325343,
      },
    })

    expect(result.userId).toEqual(scenario.stockToUser.two.userId)
    expect(result.stockId).toEqual(9853948)
    expect(result.ticker).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.numberOfStocks).toEqual(8587819)
    expect(result.price).toEqual('String')
    expect(result.totalAmount).toEqual(5762748.064325343)
  })

  scenario('updates a stockToUser', async (scenario) => {
    const original = await stockToUser({ id: scenario.stockToUser.one.id })
    const result = await updateStockToUser({
      id: original.id,
      input: { stockId: 4904510 },
    })

    expect(result.stockId).toEqual(4904510)
  })

  scenario('deletes a stockToUser', async (scenario) => {
    const original = await deleteStockToUser({
      id: scenario.stockToUser.one.id,
    })

    const result = await stockToUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
