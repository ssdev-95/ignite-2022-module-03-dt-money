import styled from 'styled-components'

export const Basis = styled.header`
  width: 100vw;
	padding: 2.5rem 1.5rem 7.5rem;
	background-color: ${(props) => props.theme['gray-900']};

	& nav {
		width: 1100px;
		max-width: 100%;

		margin-inline: auto;

  	display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const Button = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;

	height: 3rem;
	width: 3rem;

	border-radius: 0.25rem;
	border: 0;
	background: ${(props) => props.theme['green-300']};

	&:active {
		background-color: ${(props) => props.theme['green-500']};
		transition: background-color 0.25s;
	}

  & > span {
		@media(max-width:869px) {
			display: none;
		}
	}

	& > .svg {
		@media(min-width:870px) {
			display: none;
		}
	}

	@media(min-width:870px) {
		width: 10rem;
		color: ${(props) => props.theme.white};
		font-weight: 700;

		&:hover {
			background-color: ${(props) => props.theme['green-500']};
			transition: background-color 0.25s;
		}
	}
`
