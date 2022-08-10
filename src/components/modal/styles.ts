import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalOverlay = styled(Dialog.Overlay)`
  width: 100vw;
	height: 100vh;

	position: fixed;
	inset: 0;

	background: rgba(0,0,0,0.75);
`

export const ModalContainer = styled(Dialog.Content)`
  min-width: 32rem;
	padding: 2.5rem 3rem;
	border-radius: 6px;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background-color: ${(props) => props.theme['gray-800']};
`

export const ModalContent = styled.form`
  display: flex;
	flex-direction: column;
	gap: 1rem;

	margin: 1rem 0;

	input {
		padding: 1rem;
		border: 0;
		border-radius: 6px;
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme['gray-900']};

		&::placeholder {
		  color: ${(props) => props.theme['gray-500']};
		}
	}

	div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-top: 0.5rem;
	}

	button[type="submit"] {
		height: 58px;
		border-radius: 6px;

		background-color: ${(props) => props.theme['green-300']};
		color: ${(props) => props.theme.white};
		font-weight: 700;
		font-size: 1rem;

		margin-top: 1.5rem;

		&:active {
			background-color: ${(props) => props.theme['green-500']};
		}

		@media(min-width:870px) {
			&:hover {
				background-color: ${(props) => props.theme['green-500']};
			}
		}
	}
`

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
	border: 0;

	color: ${(props) => props.theme['gray-500']};
	line-height: 0;

	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	@media(min-width:870px) {
		&:hover {
			color: ${(props) => props.theme['green-500']};
		}
	}
`

interface ButtonProps {
	variant: 'income' | 'expense'
}

export const TransactionTypeButton = styled.button<ButtonProps>`
  padding: 1rem;
	border-radius: 6px;
	background-color: ${(props) => props.theme['gray-700']};

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	span {
	  color: ${(props) => props.theme.white};
		font-size: 1rem;
	}

	svg {
		${(props) => props.variant === 'income' && css`
			color: ${props.theme['green-500']};
		`}

		${(props) => props.variant === 'expense' && css`
			color: ${props.theme['red-500']};
		`}
	}

	&:active {
		background-color: ${(props) => props.theme['gray-600']};
	}

	@media(min-width:870px) {
		&:hover {
			background-color: ${(props) => props.theme['gray-600']};
		}                                                 
	}
`
