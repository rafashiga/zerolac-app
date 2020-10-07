import React from 'react'
import ReactGA from 'react-ga'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'
import 'aos/dist/aos.css'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Footer from './components/Footer'

const App: React.FC = () => {
  ReactGA.initialize('UA-149483264-4')
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default App
