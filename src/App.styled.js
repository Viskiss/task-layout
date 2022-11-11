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
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.button {
  cursor: pointer;
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
  transition:  0.5s ;

  :hover {
    transform: scale(1.03);
    -webkit-box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.57);
    -moz-box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.57);
    box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.57);
  }
}

      .header-text_block {
        margin: 100px 0 50px 0;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
       }

       .text-text-block {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        margin: 0 0 47px 0;
        color: #727272;
        font-size: 16px;
        padding: 0;
       }

      @media (max-width: 1024px) {
       .header-text_block {
        margin: 91px 0 50px 0;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
       }

       .text-text-block {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        margin-bottom: 44px;
        color: #727272;
        font-size: 16px;
        padding: 0;
       }
    }

   
       
    
    


   





`;

export default GlobalStyle;
