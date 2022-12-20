import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #eae7ea;
    font-family: 'Montserrat', sans-serif;
  }

  .container {
    width: 90vw;
    margin-inline: auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 25px;
    max-width: 40vw;
  }

  a {
    text-decoration: none;
    color: #202020;
  }

  .btn {
    margin-top: 0px;
    transition: 0.3s;
    border: 2px solid #e6b022;
    padding: 8px;
    cursor: pointer;
    color: #e6b022;
    &:hover {
      color: #e6ae2271;
      border: 2px solid #e6ae2276;
    }
  }

  .spinner {
    position: absolute;
    width: 10%;
    height: 10%;
    z-index: 1000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export default GlobalStyle;