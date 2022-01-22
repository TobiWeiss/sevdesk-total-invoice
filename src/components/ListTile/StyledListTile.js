import styled from 'styled-components';
import theme from '../../theme';

const StyledListTile = styled.div`
  height: 63px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.08);

  .row {
    height: 63px;
    align-items: center;
    margin-left: 30px;
  }
`;

export default StyledListTile;
