import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconArrow = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.93793 8.04754L0.226065 7.35387C-0.075355 7.06015 -0.075355 6.5852 0.226065 6.29461L6.45648 0.220288C6.7579 -0.0734293 7.24531 -0.0734293 7.54352 0.220288L13.7739 6.29149C14.0754 6.5852 14.0754 7.06015 13.7739 7.35074L13.0621 8.04441C12.7574 8.34126 12.2604 8.33501 11.9622 8.03192L8.28424 4.26984V13.2501C8.28424 13.6657 7.94114 14 7.51466 14H6.48855C6.06207 14 5.71897 13.6657 5.71897 13.2501V4.26984L2.03779 8.03504C1.73958 8.34126 1.24256 8.34751 0.93793 8.04754Z"
        fill={color}
      />
    </svg>
  </IconWrapper>
);

IconArrow.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconArrow.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconArrow;
