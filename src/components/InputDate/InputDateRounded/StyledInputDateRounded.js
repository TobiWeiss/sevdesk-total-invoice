import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme';

export const StyledInputDateRounded = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.darkGray};
  border-radius: 25px;
  padding: 0 10px 0 25px;
  height: 55px;
  width: ${props => props.width}px;

  .form-control {
    padding: 25px 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    caret-color: transparent;

    &:focus {
      box-shadow: none;
    }
  }
`;

StyledInputDateRounded.propTypes = {
  width: PropTypes.number,
};
