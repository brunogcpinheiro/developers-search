import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
  }
  
  body {
      background: #dff9fb;
      font-family: 'Pacifico', cursive, sans-serif;
  }
`