import { ReactNode } from 'react'
import { formatAmmount } from '../../utils/formatters'
import { SummaryCardBasis } from './styles'

type SummaryCardProps = {
  title: string
  ammount: number
  children: ReactNode
  variant?: 'total'
}

export function SummaryCard({
  children,
  title,
  ammount,
  variant,
}: SummaryCardProps) {
  return (
    <SummaryCardBasis
      variant={variant ? (ammount < 0 ? 'red' : 'green') : undefined}
    >
      <header>
        <p>{title}</p>
        {children}
      </header>

      <strong>{formatAmmount(ammount)}</strong>
    </SummaryCardBasis>
  )
}
