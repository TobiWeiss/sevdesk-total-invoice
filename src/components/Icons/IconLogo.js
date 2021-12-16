import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconLogo = props => (
  <IconWrapper {...props}>
    <svg
      width="31"
      height="25"
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2901 1L30.2577 3.85714V14.7143L20.2901 19L9.66895 14.7143V3.85714L20.2901 1Z"
        fill="white"
      />
      <path
        d="M9.66895 3.85714L20.2901 7M9.66895 3.85714L20.2901 1L30.2577 3.85714M9.66895 3.85714V14.7143L20.2901 19M20.2901 7L30.2577 3.85714M20.2901 7V19M30.2577 3.85714V14.7143L20.2901 19"
        stroke="url(#paint0_linear)"
        strokeWidth="1.2"
      />
      <path
        d="M8.26713 7L15.0871 9.06349V16.9048L8.26713 20L1 16.9048V9.06349L8.26713 7Z"
        fill="white"
      />
      <path
        d="M1 9.06349L8.26713 11.3333M1 9.06349L8.26713 7L15.0871 9.06349M1 9.06349V16.9048L8.26713 20M8.26713 11.3333L15.0871 9.06349M8.26713 11.3333V20M15.0871 9.06349V16.9048L8.26713 20"
        stroke="url(#paint1_linear)"
      />
      <path
        d="M17.985 14L23.7558 15.5873V21.619L17.985 24L11.8359 21.619V15.5873L17.985 14Z"
        fill="white"
      />
      <path
        d="M11.8359 15.5873L17.985 17.3333M11.8359 15.5873L17.985 14L23.7558 15.5873M11.8359 15.5873V21.619L17.985 24M17.985 17.3333L23.7558 15.5873M17.985 17.3333V24M23.7558 15.5873V21.619L17.985 24"
        stroke="url(#paint2_linear)"
        strokeWidth="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="19.9633"
          y1="1"
          x2="19.9633"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0100" />
          <stop offset="1" stopColor="#0164B5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="8.04353"
          y1="7"
          x2="8.04353"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0100" />
          <stop offset="1" stopColor="#0164B5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="17.7958"
          y1="14"
          x2="17.7958"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0100" />
          <stop offset="1" stopColor="#0164B5" />
        </linearGradient>
      </defs>
    </svg>
  </IconWrapper>
);

IconLogo.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconLogo.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconLogo;
