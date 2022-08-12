import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import { DTMoney } from '../@types/dt-money'

type ProviderProps = DTMoney.ProviderProps

type ContextData = DTMoney.TransactionContextData

type Transaction = DTMoney.Transaction

export const TransactionsContext = createContext({} as ContextData)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const res = await api.get('transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(res.data)
  }

  async function createNewTransaction(
    transaction: Omit<Transaction, 'id' | 'created_at'>,
  ) {
    const res = await api.post('transactions', {
      ...transaction,
      id: `${transaction.type}-${Date.now()}`,
      created_at: new Date().toISOString(),
    })

    setTransactions((prev) => [res.data, ...prev])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
