import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import eruda from 'eruda'

import { App } from './App'

import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/defaultTheme'

if (!!document && import.meta.env.DEV && window.innerWidth <= 870) {
  eruda.init()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
