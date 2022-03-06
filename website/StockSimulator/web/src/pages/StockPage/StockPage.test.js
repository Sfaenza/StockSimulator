import { render } from '@redwoodjs/testing/web'

import StockPage from './StockPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StockPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StockPage />)
    }).not.toThrow()
  })
})
