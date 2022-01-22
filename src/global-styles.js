import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.fonts.sansSerif};
    color: ${theme.colors.darkGray};
  }
  .animated {
    -webkit-animation-fill-mode: initial; //Changed from both to initial
    animation-fill-mode: initial; // Changed from both to initial
  }


  body{
    background-color: ${theme.colors.lightGray};
  }

`

export default GlobalStyle
