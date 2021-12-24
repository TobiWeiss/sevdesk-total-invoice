import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconChevron = (props) => (
  <IconWrapper {...props}>
    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.17188 0.148438L5 3.97656L8.82813 0.148438L10 1.32031L5 6.32031L0 1.32031L1.17188 0.148438Z"
        fill={props.color}
      />
    </svg>
  </IconWrapper>
);

IconChevron.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconChevron.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconChevron;
