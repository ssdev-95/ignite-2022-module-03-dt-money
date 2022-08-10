import { Calendar, TagSimple } from 'phosphor-react'

import {
  TransactionsTableContainer,
	TransactionsTableBasis,
	PriceHighlight
} from './styles'

interface Transaction {
  id: string
	description: string
	amount: number
	category: string
	type: 'income' | 'expense'
	when: string
}

const transactions:Transaction[] = [{
  id: 'k28fuwwufa9',
	description: 'Waffles in RocketCoffee',
	amount: 12.99,
	category: 'Foods',
	type: 'expense',
	when: '2022-08-18T18:59:00Z'
}, {
  id: 'k28duddwn1iw',
	description: 'Notebook at OLX',
	amount: 2129,
	category: 'Eletronics',
	type: 'income',
	when: '2022-08-18T18:59:00Z'
}]

export function TransactionsTable() {
  const renderTransaction = (transaction: Transaction) => {
	  const signal = transaction.type === 'expense' ? '-$ ' : '$ '
	  const formatedWhen = new Intl.DateTimeFormat('en-US', { dateStyle:'medium'}).format(new Date(transaction.when))
	  return (
		  <tr key={transaction.id}>
			  <td>
				  <span>{transaction.description}</span>
				</td>

				<td>
				  <PriceHighlight variant={
					  transaction.type
					}>
					  {`${signal}${transaction.amount.toFixed(2)}`}
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
		  <TransactionsTableBasis>
			  <tbody>
				  {transactions.map(renderTransaction)}
				</tbody>
			</TransactionsTableBasis>
		</TransactionsTableContainer>
	)
}
