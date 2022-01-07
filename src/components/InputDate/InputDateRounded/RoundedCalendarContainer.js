import PropTypes from 'prop-types';
import { CalendarContainer } from 'react-datepicker';
import { withTheme } from 'styled-components';
import React from 'react';
import moment from 'moment';
import Chip from '../../Chip';
import { StyledInputDatePopper } from '../StyledDatepickerPopper';

const RoundedCalendarContainer = ({
  theme,
  className,
  content,
  setDateRange,
}) => {
  const selectLast30Days = () => {
    const newStartDate = moment();
    const newEndDate = moment().subtract(30, 'days');
    setDateRange([newEndDate.toDate(), newStartDate.toDate()]);
  };

  return (
    <StyledInputDatePopper type="rangepicker">
      <CalendarContainer className={className}>
        <div className="text-right pb-3">
          <Chip
            onSelect={selectLast30Days}
            color={theme.colors.lightBlue}
            text="letzte 30 Tage"
          />
        </div>
        <div className="position-relative">{content}</div>
      </CalendarContainer>
    </StyledInputDatePopper>
  );
};

RoundedCalendarContainer.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  setDateRange: PropTypes.func,
};

export default withTheme(RoundedCalendarContainer);
