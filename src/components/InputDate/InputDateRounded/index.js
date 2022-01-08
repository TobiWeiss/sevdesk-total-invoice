import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import RoundedCalendarContainer from './RoundedCalendarContainer';
import InputGroupDateRounded from './InputGroupDateRounded';
import { initialDateRange } from '../../../containers/DeliveryNotePage/data';

const InputDateRounded = ({
  width,
  placeholder,
  selectedDateRange,
  setSelectedDateRange
}) => {
  const [startDate, endDate] = selectedDateRange;

  const resetIfSelectedDateIsNotComplete = () => {
    if (selectedDateRange.filter(date => date).length !== 2) {
      setSelectedDateRange([null, null]);
    }
  };

  const onClearInput = () => {
    setSelectedDateRange(initialDateRange);
  }

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={setSelectedDateRange}
      selected={null}
      customInput={
        <InputGroupDateRounded
          width={width}
          placeholder={placeholder}
          onClearInput={onClearInput}
        />
      }
      maxDate={new Date()}
      calendarStartDay={1}
      onClickOutside={resetIfSelectedDateIsNotComplete}
      dateFormat="dd.MM.yy"
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
      calendarContainer={({ className, children }) => (
        <RoundedCalendarContainer
          setDateRange={setSelectedDateRange}
          className={className}
          content={children}
        />
      )}
    />
  );
};

InputDateRounded.defaultProps = {
  placeholder: '',
  selectedDateRange: [null, null],
  setSelectedDateRange: () => {},
  width: 250,
};

InputDateRounded.propTypes = {
  placeholder: PropTypes.string,
  selectedDateRange: PropTypes.array,
  setSelectedDateRange: PropTypes.func,
  width: PropTypes.number,
};

export default InputDateRounded;
