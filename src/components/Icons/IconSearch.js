import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconSearch = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke="#C4C4C4" strokeWidth="2" />
      <line
        x1="16.7071"
        y1="17.2929"
        x2="20.7071"
        y2="21.2929"
        stroke="#C4C4C4"
        strokeWidth="2"
      />
    </svg>
  </IconWrapper>
);

IconSearch.defaultProps = {
  margin: '',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconSearch.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconSearch;
