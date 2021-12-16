import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconPrintLabels = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9 3.33333H2.1C0.938 3.33333 0 4.22667 0 5.33333V9.33333H2.8V12H11.2V9.33333H14V5.33333C14 4.22667 13.062 3.33333 11.9 3.33333ZM9.8 10.6667H4.2V7.33333H9.8V10.6667ZM11.9 6C11.515 6 11.2 5.7 11.2 5.33333C11.2 4.96667 11.515 4.66667 11.9 4.66667C12.285 4.66667 12.6 4.96667 12.6 5.33333C12.6 5.7 12.285 6 11.9 6ZM11.2 0H2.8V2.66667H11.2V0Z"
        fill={props.color}
      />
      <g filter="url(#filter0_d)">
        <rect x="8" y="3" width="100%" height="10px" fill="white" />
      </g>
      <path
        d="M14.8333 10H10.1667V9.2H14.8333V10ZM14.8333 8.4H10.1667V7.6H14.8333V8.4ZM14.8333 6.8H10.1667V6H14.8333V6.8ZM9 12L9.58333 11.4L10.1667 12L10.75 11.4L11.3333 12L11.9167 11.4L12.5 12L13.0833 11.4L13.6667 12L14.25 11.4L14.8333 12L15.4167 11.4L16 12V4L15.4167 4.6L14.8333 4L14.25 4.6L13.6667 4L13.0833 4.6L12.5 4L11.9167 4.6L11.3333 4L10.75 4.6L10.1667 4L9.58333 4.6L9 4V12Z"
        fill={props.background}
      />
      <defs>
        <filter
          id="filter0_d"
          x="4"
          y="3"
          width="100%"
          height="100%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </IconWrapper>
);

IconPrintLabels.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  background: theme.colors.darkGray,
};

IconPrintLabels.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  background: PropTypes.string,
};

export default IconPrintLabels;
