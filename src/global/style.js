import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;

    font-size: 16px;
  }

`;
