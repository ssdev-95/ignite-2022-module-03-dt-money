import { Calendar, TagSimple } from 'phosphor-react'
import { formatAmmount, formatDate } from '../../utils/formatters'

import { PriceHighlight } from './styles'

import { DTMoney } from '../../@types/dt-money'

interface TransactionCardProps {
  transaction: DTMoney.Transaction
}

export function TransactionCard({transaction}:TransactionCardProps) {
  return (
	  <tr key={transaction.id}>
		  <td>
			  <span>{transaction.description}</span>
			</td>

			<td>
			  <PriceHighlight variant={transaction.type}>
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
