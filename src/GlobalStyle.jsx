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
    --light: #93a8f6;
    --secondary: #424551;
    --delete: #EB5757;
  }

  body {
    background-color: var(--dark-bg);
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

  .blind {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
