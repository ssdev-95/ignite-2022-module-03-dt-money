import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/transactions'

import { FormContainer, SearchButton } from './styles'

import {
  SearchFormInputs,
  searchFormSchema,
  zodResolver,
} from '../../services/zod'

export function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({ resolver: zodResolver(searchFormSchema) })
  const { fetchTransactions, transactions } = useContextSelector(
	  TransactionsContext,
		({ fetchTransactions, transactions }) => ({
		  fetchTransactions, transactions
		})
	)

  function handleSearchTransactions(data: SearchFormInputs) {
    fetchTransactions(data.query)

    setTimeout(reset, 750)
  }

  useEffect(() => console.log(transactions), [transactions])

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
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
