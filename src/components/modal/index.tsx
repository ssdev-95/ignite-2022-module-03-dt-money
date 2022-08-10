import { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { X as IconX } from 'phosphor-react'
//import { ModalContainer } from './styles'

type ModalProps = {
  children:ReactNode
}

export function Modal( {children }: ModalProps) {
  const theme = useTheme()

  return (
		<Dialog.Root>
		  <Dialog.Trigger asChild>
			  {children}
		  </Dialog.Trigger>

			<Dialog.Portal>
			  <Dialog.Overlay />
			  
				<Dialog.Content>
				  <Dialog.Title>
					  New Transaction
					</Dialog.Title>

					<Dialog.Close>
					  <IconX
						  size={36}
							color={theme['gray-300']}
						/>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
