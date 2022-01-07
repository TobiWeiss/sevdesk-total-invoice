import styled from 'styled-components';
import theme from '../../theme';

const StyledInputSearch = styled.input`
  background: ${theme.colors.white};
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.04);
  border-radius: 54px;
  padding: 15px 55px;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export default StyledInputSearch;
