import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StockPage = () => {
  return (
    <>
      <MetaTags title="Stock" description="Stock page" />

      <h1>StockPage</h1>
      <p>
        Find me in <code>./web/src/pages/StockPage/StockPage.js</code>
      </p>
      <p>
        My default route is named <code>stock</code>, link to me with `
        <Link to={routes.stock()}>Stock</Link>`
      </p>
    </>
  )
}

export default StockPage
