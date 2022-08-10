import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X as IconX } from 'phosphor-react'
import {
  TransactionTypeButton,
  ModalContainer,
	ModalOverlay,
	ModalContent,
	CloseButton
} from './styles'

type ModalProps = {
  children:ReactNode
}

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

						<div>
						  <TransactionTypeButton
							  variant="income"
								type="button"
							>
							  <ArrowCircleUp size={24} />
							  <span>Icome</span>
							</TransactionTypeButton>

							<TransactionTypeButton
							  variant="expense"
								type="button"
							>
							  <ArrowCircleDown size={24} />
							  <span>Expense</span>
							</TransactionTypeButton>
						</div>

						<button type="submit">Register</button>
					</ModalContent>
				</ModalContainer>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
