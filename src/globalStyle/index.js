import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-image: ${(props) => `url(${props.bingBackground})`};
  }

`;

export default GlobalStyle;
