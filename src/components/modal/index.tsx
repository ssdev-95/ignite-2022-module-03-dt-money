import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X as IconX } from 'phosphor-react'
import {
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
  				  <IconX size={36} />
					</CloseButton>

					<ModalContent>
					  <input placeholder="Description" />
						<input placeholder="Ammount without signal" />
						<input placeholder="Category" />

						<button type="submit">Register</button>
					</ModalContent>
				</ModalContainer>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
