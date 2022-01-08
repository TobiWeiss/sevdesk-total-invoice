import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const getDaypickerHoverEffect = () => css`
  background-color: ${theme.colors.lightBlue};
  border-radius: 50%;
`;

export const StyledInputDatePopper = styled.div`
  padding: 15px;

  ${props =>
    props.noPadding &&
    css`
      padding: 0px;
    `}

  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.1);

  ${props =>
    props.noBoxShadow &&
    css`
      box-shadow: none;
    `}

  border-radius: 10px;
  background: ${theme.colors.white};

  .react-datepicker {
    border: none;
    z-index: 9999 !important;

    .react-datepicker__navigation {
      top: 7px;
    }

    // header
    .react-datepicker__header {
      background: transparent;
      margin-bottom: 15px;

      .react-datepicker__current-month {
        color: ${theme.colors.darkGray};
      }

      .react-datepicker__day-names {
        margin-top: 15px;

        .react-datepicker__day-name {
          width: 40px;
          margin: 0;
          color: ${theme.colors.gray};
        }
      }
    }

    // content
    .react-datepicker__month {
      .react-datepicker__week {
        margin-top: 5px;

        .react-datepicker__day {
          margin: 0;
          border-radius: 0;
          width: 40px;
          padding: 7px 0;

          &:hover {
            ${props => props.type === 'daypicker' && getDaypickerHoverEffect()}
          }

          &.react-datepicker__day--keyboard-selected {
            background: transparent;
            color: ${theme.colors.darkGray};
            font-weight: normal;
          }

          // day picker
          &.react-datepicker__day--today {
            font-weight: normal;
          }

          &.react-datepicker__day--selected {
            background: ${theme.colors.darkBlue};
            border-radius: 50%;
          }

          // range picker
          &.react-datepicker__day--in-range,
          &.react-datepicker__day--in-selecting-range {
            background-color: ${theme.colors.lightBlue};
            color: ${theme.colors.darkGray};
          }

          &.react-datepicker__day--range-start,
          &.react-datepicker__day--selecting-range-start,
          &.react-datepicker__day--range-end,
          &.react-datepicker__day--selecting-range-end {
            background: ${theme.colors.blue};
            color: ${theme.colors.white};
          }

          &.react-datepicker__day--range-start,
          &.react-datepicker__day--selecting-range-start {
            border-bottom-left-radius: 50%;
            border-top-left-radius: 50%;
          }

          &.react-datepicker__day--range-end,
          &.react-datepicker__day--selecting-range-end {
            border-bottom-right-radius: 50%;
            border-top-right-radius: 50%;
          }
        }
      }
    }
  }
`;

StyledInputDatePopper.propTypes = {
  type: PropTypes.oneOf(['rangepicker', 'daypicker']),
};
