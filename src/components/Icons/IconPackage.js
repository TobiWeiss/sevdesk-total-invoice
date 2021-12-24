import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconPackage = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9688 7.79784C13.4143 7.79784 12.8926 7.5166 12.6104 7.06661L10.5007 3.73545L8.3943 7.06661C8.10885 7.51973 7.58716 7.80097 7.03266 7.80097C6.88502 7.80097 6.73737 7.78222 6.59629 7.74159L2.10126 6.51663V12.079C2.10126 12.5383 2.42936 12.9383 2.89527 13.0477L9.98888 14.7383C10.3236 14.8164 10.6746 14.8164 11.006 14.7383L18.1062 13.0477C18.5721 12.9352 18.9002 12.5352 18.9002 12.079V6.51663L14.4052 7.73847C14.2641 7.77909 14.1164 7.79784 13.9688 7.79784ZM20.9443 4.29169L19.2545 1.07927C19.1528 0.885528 18.933 0.773031 18.7066 0.801155L10.5007 1.798L13.5094 6.551C13.6341 6.74787 13.8835 6.84162 14.1164 6.77912L20.6096 5.01354C20.9344 4.92292 21.0919 4.57918 20.9443 4.29169ZM1.7469 1.07927L0.0571665 4.29169C-0.0937615 4.57918 0.0670096 4.92292 0.388552 5.01042L6.88174 6.776C7.11469 6.83849 7.36405 6.74475 7.48873 6.54788L10.5007 1.798L2.29156 0.801155C2.06517 0.776156 1.84862 0.885528 1.7469 1.07927Z"
        fill={color}
      />
    </svg>
  </IconWrapper>
);

IconPackage.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconPackage.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconPackage;
