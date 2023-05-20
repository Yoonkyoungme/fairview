import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F1EDFD;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
