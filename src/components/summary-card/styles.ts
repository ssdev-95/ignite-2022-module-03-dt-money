import styled, {css} from 'styled-components'

type SummaryCardBasisProps = {
	variant?: 'green' | 'red'
}

export const SummaryCardBasis = styled.div<SummaryCardBasisProps>`
  border-radius: 6px;
	padding: 2rem;
	flex: 1;

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

		p {
			font-size:1.25rem;
		}
	}

	strong {
		display: block;
		font-size: 2rem;
		margin-top: 1rem;
	}

	@media(max-width:869px) {
		flex: none;
		width: 22rem;

		&:not(&+div) {
			margin-left: 12rem;
		}
	}

	@media(max-width:721px) {
		&:not(&+div) {
			margin-left: 43rem !important;
		}
	}
`
