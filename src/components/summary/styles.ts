import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1100px;
	max-width: 100vw;
	padding: 0 1.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	margin-inline: auto;
	margin-top: -5rem;

	overflow-x: auto;

	@media(max-width:869px) {
		padding-left: 25rem;

		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`
