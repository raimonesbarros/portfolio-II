import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${p => p.theme.primary};
  }

  html, body {
    background: ${p => p.theme.background};

    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
    text-align: 1.3;
    font-family: 'Roboto', sans-serif;
    color: ${p => p.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.text};
  }

  button {
    cursor: pointer;
    border: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.primary};
    border-radius: 50px;
  }

`
