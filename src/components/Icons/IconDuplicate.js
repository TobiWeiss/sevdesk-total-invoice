import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconDuplicate = (props) => (
  <IconWrapper {...props}>
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0312 0.712891C20.1186 0.712891 21 1.59518 21 2.68356V14.5076C21 15.596 20.1186 16.4783 19.0312 16.4783H7.21875C6.13143 16.4783 5.25 15.596 5.25 14.5076V2.68356C5.25 1.59518 6.13143 0.712891 7.21875 0.712891H19.0312ZM7.21875 17.7921C5.40947 17.7921 3.9375 16.3186 3.9375 14.5076V5.96802H1.96875C0.881426 5.96802 0 6.8503 0 7.93869V19.7627C0 20.8511 0.881426 21.7334 1.96875 21.7334H13.7812C14.8686 21.7334 15.75 20.8511 15.75 19.7627V17.7921H7.21875Z"
        fill="#404454"
      />
    </svg>
  </IconWrapper>
);

IconDuplicate.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconDuplicate.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconDuplicate;
