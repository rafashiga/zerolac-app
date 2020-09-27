import React from 'react'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
