import { ReactNode } from 'react'

declare namespace DTMoney {
  export interface ProviderProps {
    children: ReactNode
  }

  export interface Transaction {
    id: string
    description: string
    ammount: number
    type: 'income' | 'expense'
    category: string
    created_at: string
  }

  export interface TransactionContextData {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createNewTransaction: (
      transaction: Omit<Transaction, 'id' | 'created_at'>
    ) => Promise<void>
  }
}
