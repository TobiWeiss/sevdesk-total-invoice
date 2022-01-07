/* eslint-disable indent */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const StyledButton = styled.button`
  ${props =>
    props.size === 'xs' &&
    css`
      padding: 5px;
      min-width: 161px;
    `}
  ${props =>
    props.size === 'sm' &&
    css`
      padding: 17px;
      min-width: 223px;
    `}
  ${props =>
    props.size === 'md' &&
    css`
      padding: 15px;
      min-width: 263px;
    `}
  ${props =>
    props.size === 'lg' &&
    css`
      padding: 17px;
      min-width: 263px;
    `}
  ${props =>
    props.type === 'primary' &&
    css`
      background-color: ${theme.colors.darkBlue};
      border: none;
    `};
  ${props =>
    props.type === 'secondary' &&
    css`
      background-color: ${theme.colors.lightGray};
      border: 1px solid ${theme.colors.gray};
    `};
  ${props =>
    props.type === 'outlined' &&
    css`
      background-color: ${theme.colors.white};
      border: none;
    `};

    ${props =>
      props.type === 'disabled' &&
      css`
        background-color: ${theme.colors.disabledGray};
        border: none;
      `};

  ${props =>
    props.isBlock &&
    css`
      width: 100%;
      display: block;
    `};

  ${props =>
    props.hasRoundedCorners &&
    css`
      border-radius: 55px;
    `};

  ${props =>
    props.type === 'primary' &&
    (props.size === 'lg' || props.size === 'sm') &&
    css`
      box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.08);
    `};

  &:hover {
    background-color: ${props => {
      if (props.type === 'primary') {
        return theme.colors.blue;
      }
      if (props.type === 'disabled') {
        return theme.colors.gray;
      }
      return theme.colors.lightGray;
    }};

  }
`;

StyledButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default StyledButton;
