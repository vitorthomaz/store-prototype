import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
