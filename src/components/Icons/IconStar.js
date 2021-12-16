import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconStar = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24897 0.452219L4.54019 3.81352L0.717021 4.35428C0.0314143 4.45075 -0.243352 5.27076 0.253844 5.74043L3.01982 8.35534L2.36562 12.0492C2.24786 12.7169 2.97272 13.217 3.57982 12.9048L7 11.1607L10.4202 12.9048C11.0273 13.2145 11.7521 12.7169 11.6344 12.0492L10.9802 8.35534L13.7462 5.74043C14.2434 5.27076 13.9686 4.45075 13.283 4.35428L9.45981 3.81352L7.75103 0.452219C7.44486 -0.146926 6.55776 -0.154542 6.24897 0.452219Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconStar.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconStar.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconStar;
