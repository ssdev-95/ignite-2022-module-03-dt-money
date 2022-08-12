import { useContextSelector } from 'use-context-selector'
import { SearchForm } from '../search-form'
import { TransactionCard } from '../transaction-card'

import {
  TransactionsTableContainer,
  TransactionsTableBasis,
} from './styles'

import { TransactionsContext } from '../../contexts/transactions'
export function TransactionsTable() {
  const transactions = useContextSelector(
	  TransactionsContext,
		(context) => context.transactions
	)

  return (
    <TransactionsTableContainer>
      <SearchForm />
      <TransactionsTableBasis>
        <tbody>{transactions.map((transaction) => (
				  <TransactionCard
					  key={transaction.id}
					  transaction={transaction}
					/>
				))}</tbody>
      </TransactionsTableBasis>
    </TransactionsTableContainer>
  )
}
