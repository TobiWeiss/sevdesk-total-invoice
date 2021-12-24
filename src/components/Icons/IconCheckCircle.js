import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconCheckCircle = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 8.29688C15 12.439 11.6421 15.7969 7.5 15.7969C3.35785 15.7969 0 12.439 0 8.29688C0 4.15473 3.35785 0.796875 7.5 0.796875C11.6421 0.796875 15 4.15473 15 8.29688ZM6.63248 12.2681L12.197 6.70355C12.3859 6.5146 12.3859 6.20822 12.197 6.01926L11.5127 5.33498C11.3238 5.146 11.0174 5.146 10.8284 5.33498L6.29032 9.87302L4.1716 7.7543C3.98265 7.56535 3.67627 7.56535 3.48729 7.7543L2.803 8.43859C2.61405 8.62754 2.61405 8.93392 2.803 9.12287L5.94817 12.268C6.13715 12.457 6.4435 12.457 6.63248 12.2681Z"
        fill={color}
      />
    </svg>
  </IconWrapper>
);

IconCheckCircle.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconCheckCircle.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconCheckCircle;
