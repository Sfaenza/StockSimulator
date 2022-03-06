import { db } from 'src/lib/db'

export const stocks = () => {
  return db.stock.findMany()
}

export const stock = ({ id }) => {
  return db.stock.findUnique({
    where: { id },
  })
}

export const createStock = ({ input }) => {
  return db.stock.create({
    data: input,
  })
}

export const updateStock = ({ id, input }) => {
  return db.stock.update({
    data: input,
    where: { id },
  })
}

export const deleteStock = ({ id }) => {
  return db.stock.delete({
    where: { id },
  })
}
