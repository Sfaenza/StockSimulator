import { db } from 'src/lib/db'

export const stockToUsers = () => {
  return db.stockToUser.findMany()
}

export const stockToUser = ({ id }) => {
  return db.stockToUser.findUnique({
    where: { id },
  })
}

export const createStockToUser = ({ input }) => {
  return db.stockToUser.create({
    data: input,
  })
}

export const updateStockToUser = ({ id, input }) => {
  return db.stockToUser.update({
    data: input,
    where: { id },
  })
}

export const deleteStockToUser = ({ id }) => {
  return db.stockToUser.delete({
    where: { id },
  })
}

export const StockToUser = {
  user: (_obj, { root }) =>
    db.stockToUser.findUnique({ where: { id: root.id } }).user(),
}
