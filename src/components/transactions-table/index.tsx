import { useContext } from 'react'
import { Calendar, TagSimple } from 'phosphor-react'
import { SearchForm } from '../search-form'

import {
  TransactionsTableContainer,
	TransactionsTableBasis,
	PriceHighlight
} from './styles'

import { TransactionsContext } from '../../contexts/transactions'
import { DTMoney } from '../../@types/dt-money'

type Transaction = DTMoney.Transaction

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)
  const renderTransaction = (transaction: Transaction) => {
	  const signal = transaction.type === 'expense' ? '-$ ' : '$ '
	  const formatedWhen = new Intl.DateTimeFormat('en-US', { dateStyle:'medium'}).format(new Date(transaction.created_at))
	  return (
		  <tr key={transaction.id}>
			  <td>
				  <span>{transaction.description}</span>
				</td>

				<td>
				  <PriceHighlight variant={
					  transaction.type
					}>
					  {`${signal}${transaction.ammount.toFixed(2)}`}
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
					  {formatedWhen}
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
