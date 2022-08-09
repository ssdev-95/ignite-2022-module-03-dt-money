import { ReactNode } from 'react'
import { SummaryCardBasis } from './styles'

type SummaryCardProps = {
  title:string
	ammount:number
	children:ReactNode
	variant?: 'total'
}

export function SummaryCard({ children, title, ammount, variant }:SummaryCardProps) {
  const signal = ammount < 0 ? '- $ ' : '$ '
	const normalizedAmmount = ammount < 0 ? (ammount * (-1)) : ammount
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

			<strong>{`${signal}${normalizedAmmount.toFixed(2)}`}</strong>
		</SummaryCardBasis>
	)
}
