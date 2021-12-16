import styled, { css } from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import theme from '../../theme';

const StyledChip = styled.div`
  border: 2px solid;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 10px;
  margin: 2px;

  .chip-content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${(props) => {
    switch (props.color) {
      case theme.colors.darkGray:
        return css`
          background-color: ${theme.colors.darkGray};
          border-color: ${theme.colors.darkGray};

          div {
            color: ${theme.colors.white};
          }
        `;
    case theme.colors.white:
        return css`
          background-color: ${theme.colors.white};
          border-color: ${theme.colors.darkGray};

          div {
            color: ${theme.colors.darkGray};
          }
        `;
      default:
        return css`
      background-color: ${props.color};
      border-color: ${props.color};

      div {
        color: ${darken(0.5, props.color)}
    `;
    }
  }}
  ${(props) =>
    props.color === theme.colors.white &&
    css`
      border: none;
    `}
`;

StyledChip.propTypes = {
  color: PropTypes.oneOf(Object.values(theme.colors)),
};

export default StyledChip;
