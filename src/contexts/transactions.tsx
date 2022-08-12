import { useState, useEffect, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api'
import { DTMoney } from '../@types/dt-money'

type ProviderProps = DTMoney.ProviderProps

type ContextData = DTMoney.TransactionContextData

type Transaction = DTMoney.Transaction

type NewTransactionProps = Omit<Transaction, 'id' | 'created_at'>

export const TransactionsContext = createContext({} as ContextData)

export function TransactionsProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const res = await api.get('transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(res.data)
  }, [])

  const createNewTransaction = useCallback(
    async (transaction: NewTransactionProps) => {
      const res = await api.post('transactions', {
        ...transaction,
        id: `${transaction.type}-${Date.now()}`,
        created_at: new Date().toISOString(),
      })

      setTransactions((prev) => [res.data, ...prev])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

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
