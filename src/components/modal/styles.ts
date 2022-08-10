import styled from 'styled-components'
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

	button[type="submit"] {
		height: 58px;
		border-radius: 6px;

		background-color: ${(props) => props.theme['green-300']};
		color: ${(props) => props.theme.white};
		font-weight: 700;
		font-size: 1rem;

		margin-top: 1.5rem;
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
		&::hover {
			color: ${(props) => props.theme['green-500']};
		}
	}
`
