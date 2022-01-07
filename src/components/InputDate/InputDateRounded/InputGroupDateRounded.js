import React, { forwardRef } from 'react';
import { Form } from 'react-bootstrap';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledInputDateRounded } from './StyledInputDateRounded';
import IconCalendar from '../../Icons/IconCalendar';
import IconClose from '../../Icons/IconClose';

const InputGroupDateRounded = forwardRef(
  ({ width, theme, value, onClick, placeholder, onClearInput }, ref) => (
    <StyledInputDateRounded width={width}>
      <IconCalendar
        color={theme.colors.darkGray}
        size="lg"
        margin="13px 0 0 0"
      />
      <Form.Control
        placeholder={placeholder}
        onClick={onClick}
        ref={ref}
        value={value}
        onChange={() => {}}
      />
      <div
        onClick={onClearInput}
        role="button"
        tabIndex={0}
        onKeyDown={onClearInput}
      >
        <IconClose
          color={theme.colors.darkGray}
          size="sm"
          margin="20px 0 0 0"
        />
      </div>
    </StyledInputDateRounded>
  ),
);

InputGroupDateRounded.propTypes = {
  width: PropTypes.number,
  theme: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  onClearInput: PropTypes.func,
};

export default withTheme(InputGroupDateRounded);
