import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm, Controller } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { ArrowCircleDown, ArrowCircleUp, X as IconX } from 'phosphor-react'

import {
  TransactionTypeContainer,
  TransactionTypeButton,
  ModalContainer,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from './styles'

import { TransactionsContext } from '../../contexts/transactions'

import {
  newTransactionFormSchema,
  NewTransactionFormInputs,
  zodResolver,
} from '../../services/zod'

type ModalProps = {
  children: ReactNode
}

export function Modal({ children }: ModalProps) {
  const createNewTransaction = useContextSelector(
	  TransactionsContext,
		(context) => context.createNewTransaction
	)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: 'income', ammount: 0 },
  })

  function handleAddNewTransaction(data: NewTransactionFormInputs) {
    createNewTransaction(data)

    setTimeout(reset, 750)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />

        <ModalContainer>
          <Dialog.Title>New Transaction</Dialog.Title>

          <CloseButton>
            <IconX size={24} />
          </CloseButton>

          <ModalContent onSubmit={handleSubmit(handleAddNewTransaction)}>
            <input
              placeholder="Description"
              required
              {...register('description')}
            />
            <input
              placeholder="Ammount without signal"
              required
              {...register('ammount', { valueAsNumber: true })}
            />
            <input placeholder="Category" required {...register('category')} />

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    <span>Icome</span>
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="expense" value="expense">
                    <ArrowCircleDown size={24} />
                    <span>Expense</span>
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )}
            />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </ModalContent>
        </ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
