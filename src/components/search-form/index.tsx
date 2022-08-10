import { MagnifyingGlass } from 'phosphor-react'

import { FormContainer, SearchButton } from './styles'

export function SearchForm() {

  return (
	  <FormContainer onSubmit={e => e.preventDefault()}>
		  <input placeholder="Search transactions" />
			<SearchButton>
				<MagnifyingGlass size={24} />
			  <span>Search</span>
			</SearchButton>
		</FormContainer>
	)
}
