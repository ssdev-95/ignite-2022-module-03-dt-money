import { ReactNode } from 'react'
import { SummaryCardBasis } from './styles'

type SummaryCardProps = {
  title:string
	ammount:number
	children:ReactNode
	variant?: 'total'
}

export function SummaryCard({ children, title, ammount, variant }:SummaryCardProps) {
	return (
	  <SummaryCardBasis variant={
		  variant ?
			(ammount < 0 ? 'red' : 'green') :
			undefined
		}>
		  <header>
			  <p>{title}</p>
				{ children }
			</header>

			<strong>US${ammount.toFixed(2)}</strong>
		</SummaryCardBasis>
	)
}
