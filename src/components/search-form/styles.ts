import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 1100px;
	max-width: 100vw;
	padding: 0 1.5rem;

	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 1.5rem;

	input {
		flex: 1;
		padding: 1rem;
		background-color: ${(props) => props.theme['gray-900']};
		border: 0;
		border-radius: 6px;
		color: ${(props)=>props.theme.white};

		&::placeholder {
			color: ${(props)=>props.theme['gray-500']};
		}
	}
`

export const SearchButton = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

  padding: 0.5rem;

	border-radius: 0.375rem;
	border: 2px solid ${(props) => props.theme['green-300']};
	background: transparent;
	color: ${(props) => props.theme['green-300']};

	&:active {
		border-color: ${(props) => props.theme['green-500']};
	
		background-color: ${(props) => props.theme['green-500']};

		color: ${(props) => props.theme.white};

		transition: background-color 0.25s, border-color 0.25s, color 0.25s;
	}

	@media(max-width:869px) {
		line-height: 0;

		& > span {
			display: none;
		}
	}

	@media(min-width:870px) {
		&:hover {
			border-color: ${(props) => props.theme['green-500']};

			background-color: ${(props) => props.theme['green-500']};

			color: ${(props) => props.theme.white};

			transition: background-color 0.25s, border-color 0.25s, color 0.25s;
		}
	}
`
