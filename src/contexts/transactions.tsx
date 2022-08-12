import {
  createContext, useState, useEffect
} from 'react'
import { DTMoney } from '../@types/dt-money'

type ProviderProps = DTMoney.ProviderProps

type ContextData = DTMoney.TransactionContextData

export const TransactionsContext = createContext({} as ContextData)

const api_url = import.meta.env.VITE_API_URL
export function TransactionsProvider({
   children
}:ProviderProps) {
  const [transactions, setTransactions] = useState<DTMoney.Transaction[]>([])

	function queryTransactions(text:string) {
	  fetch(`${api_url}/transactions?q=${text}`)
		  .then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
	}

  useEffect(() => {
	  fetch(`${api_url}transactions`)
		.then((res) => res.json())
		.then((data) => setTransactions(data))
		.catch((err) => console.log(err))
	}, [])

  return (
	  <TransactionsContext.Provider value={{
		  transactions,
			queryTransactions
		}}>
		  {children}
		</TransactionsContext.Provider>
	)
}
