import React from 'react'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default App
