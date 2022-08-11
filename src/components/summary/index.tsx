import { useTheme } from 'styled-components'

import {
  ArrowCircleUp, ArrowCircleDown, CurrencyDollar
} from 'phosphor-react'

import { SummaryCard } from '../summary-card'
import { Wrapper } from './styles'

import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const theme = useTheme()
	const { incomes, expenses, total } = useSummary()

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
