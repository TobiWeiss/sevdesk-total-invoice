import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconHome = (props) => (
  <IconWrapper {...props}>
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 3.21583L15.0001 7.34083V14.5H13.0001V9H7.00012V14.5H5.00012V7.34083L10.0001 3.21583ZM10.0001 0.75L0.00012207 9H3.00012V16.3333H9.00012V10.8333H11.0001V16.3333H17.0001V9H20.0001L10.0001 0.75Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconHome.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.white,
  size: 'sm',
};

IconHome.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconHome;
