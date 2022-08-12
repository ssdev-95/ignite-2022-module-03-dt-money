import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'

import { ArrowCircleDown, ArrowCircleUp, X as IconX } from 'phosphor-react'

import {
  TransactionTypeContainer,
  TransactionTypeButton,
  ModalContainer,
	ModalOverlay,
	ModalContent,
	CloseButton
} from './styles'

import { newTransactionFormSchema, NewTransactionFormInputs, zodResolver } from '../../services/zod'

type ModalProps = {
  children:ReactNode
}

export function Modal( {children }: ModalProps) {
  const {
	  register,
		handleSubmit,
		reset,
		formState: { isSubmitting }
	} = useForm<NewTransactionFormInputs>({
	  resolver: zodResolver(newTransactionFormSchema)
	})

  function handleAddNewTransaction(data:NewTransactionFormInputs) {
	  console.log(data)

		setTimeout(reset, 750)
	}

  return (
		<Dialog.Root>
		  <Dialog.Trigger asChild>
			  {children}
		  </Dialog.Trigger>

			<Dialog.Portal>
			  <ModalOverlay />
			  
				<ModalContainer>
				  <Dialog.Title>
					  New Transaction
					</Dialog.Title>

  				<CloseButton>
  				  <IconX size={24} />
					</CloseButton>

					<ModalContent onSubmit={
					  handleSubmit(handleAddNewTransaction)
					}>
					  <input
						  placeholder="Description"
							{...register('description')}
						/>
						<input
						  placeholder="Ammount without signal"
							{...register(
							  'ammount',
								{ valueAsNumber: true }
							)}
						/>
						<input
						  placeholder="Category"
							{...register('category')}
						/>

						<TransactionTypeContainer
						  {...register('type')}
						>
						  <TransactionTypeButton
							  variant="income"
								value="income"
							>
							  <ArrowCircleUp size={24} />
							  <span>Icome</span>
							</TransactionTypeButton>

							<TransactionTypeButton
							  variant="expense"
								value="expense"
							>
							  <ArrowCircleDown size={24} />
							  <span>Expense</span>
							</TransactionTypeButton>
						</TransactionTypeContainer>

						<button
					    type="submit"
							disabled={isSubmitting}
						>
						  Register
						</button>
					</ModalContent>
				</ModalContainer>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
