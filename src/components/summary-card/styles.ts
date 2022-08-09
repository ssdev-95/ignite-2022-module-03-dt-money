import styled, {css} from 'styled-components'

type SummaryCardBasisProps = {
	variant?: 'green' | 'red'
}

export const SummaryCardBasis = styled.div<SummaryCardBasisProps>`
  border-radius: 6px;
	padding: 2rem;
	width: 22rem;

	${props => !props.variant && css`
		background-color: ${props.theme['gray-600']};
	`}

	${props => props.variant === 'green' && css`
	  background-color: ${props.theme['green-500']};
	`}

	${props => props.variant === 'red' && css`
		background-color: ${props.theme['red-500']};
	`}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: ${props => props.theme['gray-300']};
	}

	strong {
		display: block;
		font-size: 2rem;
		margin-top: 1rem;
	}

	@media(max-width:869px) {
		width: 18rem;
	}
`
