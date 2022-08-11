import { TransactionsProvider } from './contexts/transactions'
import { Home } from './pages/home'

export function App() {
  return (
	  <TransactionsProvider>
		  <Home />
		</TransactionsProvider>
	)
}
