import { useTheme } from 'styled-components'

import {
  ArrowCircleUp, ArrowCircleDown, CurrencyDollar
} from 'phosphor-react'

import { SummaryCard } from '../summary-card'
import { Wrapper } from './styles'

export function Summary() {
  const theme = useTheme()

	return (
	  <Wrapper>
		  <SummaryCard
			  title="Incomes"
				ammount={3745.10}
			>
			  <ArrowCircleUp
				  size={36}
					color={theme['green-500']}
				/>
			</SummaryCard>

			<SummaryCard
			  title="Expenses"
				ammount={-1200.45}
			>
			  <ArrowCircleDown
				  size={36}
					color={theme['red-500']}
				/>
			</SummaryCard>

			<SummaryCard
			  title="Total"
				ammount={2544.65}
				variant="total"
			>
			  <CurrencyDollar size={36} />
			</SummaryCard>
		</Wrapper>
	)
}
