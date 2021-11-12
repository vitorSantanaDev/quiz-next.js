import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: #6c54d8;
    color: #FFF;
  }
`

export default GlobalStyle;