// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import StockToUsersLayout from 'src/layouts/StockToUsersLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import StocksLayout from 'src/layouts/StocksLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={StockToUsersLayout}>
        <Route path="/stock-to-users/new" page={StockToUserNewStockToUserPage} name="newStockToUser" />
        <Route path="/stock-to-users/{id:Int}/edit" page={StockToUserEditStockToUserPage} name="editStockToUser" />
        <Route path="/stock-to-users/{id:Int}" page={StockToUserStockToUserPage} name="stockToUser" />
        <Route path="/stock-to-users" page={StockToUserStockToUsersPage} name="stockToUsers" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={StocksLayout}>
        <Route path="/stocks/new" page={StockNewStockPage} name="newStock" />
        <Route path="/stocks/{id:Int}/edit" page={StockEditStockPage} name="editStock" />
        <Route path="/stocks/{id:Int}" page={StockStockPage} name="stock" />
        <Route path="/stocks" page={StockStocksPage} name="stocks" />
      </Set>
      <Route path="/stock" page={StockPage} name="stock" />
      <Route path="/homepage" page={HomepagePage} name="homepage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
