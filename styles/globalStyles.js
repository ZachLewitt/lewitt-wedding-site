import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Trebuchet, Tahoma, Arial, sans-serif;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
  }

  .container {
    height: 100vh;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
