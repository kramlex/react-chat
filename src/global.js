import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box }
  .app {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`

export default GlobalStyles