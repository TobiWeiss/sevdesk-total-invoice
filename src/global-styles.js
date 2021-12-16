import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.fonts.sansSerif};
    color: ${theme.colors.darkGray};
  }
`;

export default GlobalStyle;
