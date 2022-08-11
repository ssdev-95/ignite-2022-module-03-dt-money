import {
  createContext, useState, useEffect
} from 'react'
import { DTMoney } from '../@types/dt-money'

type ProviderProps = DTMoney.ProviderProps

type ContextData = DTMoney.TransactionContextData

export const TransactionsContext = createContext({} as ContextData)

export function TransactionsProvider({
   children
}:ProviderProps) {
  const [transactions, setTransactions] = useState<DTMoney.Transaction[]>([])

  useEffect(() => {
	  fetch(`${import.meta.env.VITE_API_URL}transactions`)
		.then((res) => res.json())
		.then((data) => setTransactions(data))
		.catch((err) => console.log(err))
	}, [])

  return (
	  <TransactionsContext.Provider value={{
		  transactions,
			setTransactions
		}}>
		  {children}
		</TransactionsContext.Provider>
	)
}
