import { Dispatch, ReactNode, SetStateAction } from "react"

declare namespace DTMoney {
	export interface ProviderProps {
		children:ReactNode
	}

	export interface Transaction {
		id:string
		description:string
		ammount:number
		type: 'income' | 'expense'
		category:string
		created_at:string
	}

	export interface TransactionContextData {
		transactions:Transaction[]
		queryTransactions: (text:string) => void
	}
}
