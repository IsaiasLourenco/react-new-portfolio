import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    boxBackground: ${({ theme }) => theme.boxBackground};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }

  button {
    font-family: 'Arial', sans-serif;
    cursor: pointer;
  }
`;
