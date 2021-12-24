import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconProfile = (props) => (
  <IconWrapper {...props}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 2.7C10.494 2.7 11.7 3.906 11.7 5.4C11.7 6.894 10.494 8.1 9 8.1C7.506 8.1 6.3 6.894 6.3 5.4C6.3 3.906 7.506 2.7 9 2.7ZM9 15.48C6.75 15.48 4.761 14.328 3.6 12.582C3.627 10.791 7.2 9.81 9 9.81C10.791 9.81 14.373 10.791 14.4 12.582C13.239 14.328 11.25 15.48 9 15.48Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconProfile.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.white,
  size: 'sm',
};

IconProfile.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconProfile;
