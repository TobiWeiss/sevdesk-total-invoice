import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconError = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="12.5" stroke={props.color} />
      <path
        d="M6 18H20L13 6L6 18ZM13.6364 16.1053H12.3636V14.8421H13.6364V16.1053ZM13.6364 13.5789H12.3636V11.0526H13.6364V13.5789Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconError.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.red,
  size: 'sm',
};

IconError.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconError;
