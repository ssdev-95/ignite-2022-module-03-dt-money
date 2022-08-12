import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/transactions'

export function useSummary() {
  const transactions = useContextSelector(
		TransactionsContext,
		(context) => context.transactions
	)
  const summary = transactions.reduce(
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

  return summary
}
