import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X as IconX } from 'phosphor-react'
import {
  TransactionTypeContainer,
  TransactionTypeButton,
  ModalContainer,
	ModalOverlay,
	ModalContent,
	CloseButton
} from './styles'

type ModalProps = {
  children:ReactNode
}

type Types = 'income' | 'expense'

export function Modal( {children }: ModalProps) {
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

					<ModalContent onSubmit={e => e.preventDefault()}>
					  <input placeholder="Description" />
						<input placeholder="Ammount without signal" />
						<input placeholder="Category" />

						<TransactionTypeContainer>
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

						<button type="submit">Register</button>
					</ModalContent>
				</ModalContainer>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
