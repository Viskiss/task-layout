import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

    .button {
    width: 225px;
    height: 65px;
    background: #34547a;
    font-family: "Roboto";
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.1em;
    border: none;
    color: white;
    }
`;

export default GlobalStyle;
