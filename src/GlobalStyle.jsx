import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --dark-bg: #23272a;
    --bg: #2c2f33;
    --gray-400: #b6c9d6;
    --gray-500: #99aab5;
    --gray-800: #76838d;
    --white: #fff;
    --primary: #7289da;
    --secondary: #424551;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;
    background-color: inherit;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

    input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
