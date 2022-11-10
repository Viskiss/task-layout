import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
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
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.1em;
    border: none;
    color: white;
    }
`;

export default GlobalStyle;
