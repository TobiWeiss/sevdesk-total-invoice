import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconValid = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="12.5" fill={color} stroke={color} />
      <path
        d="M10.8135 15.3117L7.96873 12.824L7 13.6652L10.8135 17L19 9.84116L18.0381 9L10.8135 15.3117Z"
        fill={theme.colors.white}
      />
    </svg>
  </IconWrapper>
);

IconValid.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkBlue,
  size: 'sm',
  direction: 'down',
};

IconValid.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconValid;
