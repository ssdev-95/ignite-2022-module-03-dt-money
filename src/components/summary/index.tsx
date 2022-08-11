import { useContext } from 'react'
import { useTheme } from 'styled-components'

import {
  ArrowCircleUp, ArrowCircleDown, CurrencyDollar
} from 'phosphor-react'

import { SummaryCard } from '../summary-card'
import { Wrapper } from './styles'

import { TransactionsContext } from '../../contexts/transactions'

export function Summary() {
  const theme = useTheme()
	const { transactions } = useContext(TransactionsContext)

  const total = transactions.reduce((acc, curr) => {
	  if(curr.type === 'income'){
		  return acc + curr.ammount
		}

		return acc - curr.ammount
	}, 0)

	const incomes = transactions.reduce((acc, curr) => {
	  if(curr.type === 'expense') {
		  return acc
		}

		return acc + curr.ammount
	}, 0)

	const expenses = transactions.reduce((acc, curr) => {
	  if(curr.type === 'income') {
		  return acc
		}

		return acc - curr.ammount
	}, 0)

	console.log('total: ',total)
	console.log('incomes: ',incomes)
	console.log('expenses: ',expenses)

	return (
	  <Wrapper>
		  <SummaryCard
			  title="Incomes"
				ammount={incomes}
			>
			  <ArrowCircleUp
				  size={36}
					color={theme['green-500']}
				/>
			</SummaryCard>

			<SummaryCard
			  title="Expenses"
				ammount={expenses}
			>
			  <ArrowCircleDown
				  size={36}
					color={theme['red-500']}
				/>
			</SummaryCard>

			<SummaryCard
			  title="Total"
				ammount={total}
				variant="total"
			>
			  <CurrencyDollar size={36} />
			</SummaryCard>
		</Wrapper>
	)
}
