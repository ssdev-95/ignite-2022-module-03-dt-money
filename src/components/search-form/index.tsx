import { useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'

import { FormContainer, SearchButton } from './styles'
import {useEffect} from 'react'
import { SearchFormInputs, searchFormSchema, zodResolver } from '../../services/zod'

export function SearchForm() {
  const {
	register,
	handleSubmit,
	reset,
	formState: { isSubmitting }
	} = useForm<SearchFormInputs>({ resolver: zodResolver(searchFormSchema)})
	const { queryTransactions, transactions } = useSummary()

	function handleSearchTransactions(data:SearchFormInputs) {
	  if(!data.query) {
		  return
		}

		queryTransactions(data.query)

		setTimeout(reset,750)
	}


	useEffect(() => console.log(transactions), [transactions])

  return (
	  <FormContainer onSubmit={
		  handleSubmit(handleSearchTransactions)
		}>
		  <input
			  type="text"
				placeholder="Search transactions"
				{...register('query')}
			/>
			<SearchButton disabled={isSubmitting}>
				<MagnifyingGlass size={24} />
			  <span>Search</span>
			</SearchButton>
		</FormContainer>
	)
}
