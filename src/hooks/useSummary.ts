import { useContext } from 'react'
import { TransactionsContext } from '../contexts/transactions'

export function useSummary() {
  const context = useContext(TransactionsContext)
  const summary = context.transactions.reduce(
    (acc, curr) => {
      if (curr.type === 'income') {
        acc.incomes += curr.ammount
      }

      if (curr.type === 'expense') {
        acc.expenses -= curr.ammount
      }

      acc.total = acc.incomes + acc.expenses

      return acc
    },
    { incomes: 0, expenses: 0, total: 0 },
  )

  return { ...summary, ...context }
}
