import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: default;
  }

  html {
    font-size: 10px;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html,
  body,
  #__next {
    font-size: 16px;
    min-height: 100vh;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  textarea {
    cursor: text;
  }

  ${({ theme }) => css`
    body,
    button,
    input,
    textarea {
      font-family: ${theme.font.family};
      font-size: ${theme.sizes['16px']};
    }
  `}
`

export default GlobalStyles
