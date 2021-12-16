import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconExport = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.77778 1.2H7.22333C6.96667 0.504 6.29444 0 5.5 0C4.70556 0 4.03333 0.504 3.77667 1.2H1.22222C0.55 1.2 0 1.74 0 2.4V10.8C0 11.46 0.55 12 1.22222 12H9.77778C10.45 12 11 11.46 11 10.8V2.4C11 1.74 10.45 1.2 9.77778 1.2ZM5.5 1.2C5.83611 1.2 6.11111 1.47 6.11111 1.8C6.11111 2.13 5.83611 2.4 5.5 2.4C5.16389 2.4 4.88889 2.13 4.88889 1.8C4.88889 1.47 5.16389 1.2 5.5 1.2ZM5.5 10.2L2.44444 7.2H4.27778V4.8H6.72222V7.2H8.55556L5.5 10.2Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconExport.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconExport.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconExport;
