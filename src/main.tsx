import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App'

import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/defaultTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	  <ThemeProvider theme={defaultTheme}>
		  <GlobalStyle />
      <App />
		</ThemeProvider>
  </React.StrictMode>
)
