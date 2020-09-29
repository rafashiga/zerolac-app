import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
		font-size: 100%;
	}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
