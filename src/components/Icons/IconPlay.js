import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconPlay = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13"
        cy="13"
        r="12.5"
        fill="white"
        stroke="url(#paint0_linear_1302:152)"
      />
      <path d="M11 9V18L18 13.5L11 9Z" fill="url(#paint1_linear_1302:152)" />
      <defs>
        <linearGradient
          id="paint0_linear_1302:152"
          x1="13"
          y1="0"
          x2="13"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0100" />
          <stop offset="1" stopColor="#163D6B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1302:152"
          x1="14.5"
          y1="9"
          x2="14.5"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0100" />
          <stop offset="1" stopColor="#163D6B" />
        </linearGradient>
      </defs>
    </svg>
  </IconWrapper>
);

IconPlay.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconPlay.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconPlay;
