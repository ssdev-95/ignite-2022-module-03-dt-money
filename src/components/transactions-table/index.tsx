import { Calendar, TagSimple } from 'phosphor-react'
import { SearchForm } from '../search-form'
import { formatAmmount, formatDate } from '../../utils/formatters'

import { TransactionsTableContainer, TransactionsTableBasis, PriceHighlight } from './styles'

import { useSummary } from '../../hooks/useSummary'
import { DTMoney } from '../../@types/dt-money'

type Transaction = DTMoney.Transaction

export function TransactionsTable() {
  const { transactions } = useSummary()
  const renderTransaction = (transaction: Transaction) => {
	  return (
		  <tr key={transaction.id}>
			  <td>
				  <span>{transaction.description}</span>
				</td>

				<td>
				  <PriceHighlight variant={
					  transaction.type
					}>
					  {formatAmmount(transaction.ammount)}
					</PriceHighlight>
				</td>

				<td>
				  <span className="hasIcon">
					  <TagSimple size={24} />
					  {transaction.category}
					</span>
				</td>

				<td>
				  <span className="hasIcon">
					  <Calendar size={24} />
					  {formatDate(transaction.created_at)}
					</span>
				</td>
			</tr>
		)
	}
  return (
	  <TransactionsTableContainer>
		  <SearchForm />
		  <TransactionsTableBasis>
			  <tbody>
				  {transactions.map(renderTransaction)}
				</tbody>
			</TransactionsTableBasis>
		</TransactionsTableContainer>
	)
}
