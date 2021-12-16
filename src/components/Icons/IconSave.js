import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

function IconSave(props) {
  return (
    <IconWrapper {...props}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5607 3.06066L10.9393 0.439344C10.658 0.158039 10.2765 2.08024e-06 9.87869 0H1.5C0.671562 0 0 0.671562 0 1.5V12.5C0 13.3284 0.671562 14 1.5 14H12.5C13.3284 14 14 13.3284 14 12.5V4.12131C14 3.72349 13.842 3.34196 13.5607 3.06066ZM7 12C5.89544 12 5 11.1046 5 10C5 8.89544 5.89544 8 7 8C8.10456 8 9 8.89544 9 10C9 11.1046 8.10456 12 7 12ZM10 2.48375V5.625C10 5.83209 9.83209 6 9.625 6H2.375C2.16791 6 2 5.83209 2 5.625V2.375C2 2.16791 2.16791 2 2.375 2H9.51625C9.61572 2 9.71109 2.0395 9.78141 2.10984L9.89016 2.21859C9.92498 2.25341 9.95261 2.29475 9.97146 2.34024C9.99031 2.38574 10 2.4345 10 2.48375Z"
          fill={props.color}
        />
      </svg>
    </IconWrapper>
  );
}

IconSave.defaultProps = {
  color: theme.colors.darkGray,
  size: 'sm',
};

IconSave.propTypes = {
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconSave;
