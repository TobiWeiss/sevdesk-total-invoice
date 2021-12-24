import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconSubtract = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9" stroke="#163D6B" />
      <path d="M6.82 8.24H11.6V10.4H6.82V8.24Z" fill={color} />
    </svg>
  </IconWrapper>
);

IconSubtract.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconSubtract.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconSubtract;
