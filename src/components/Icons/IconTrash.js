import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconTrash = props => (
  <IconWrapper {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.07143 18.6667C1.07143 19.95 2.03571 21 3.21429 21H11.7857C12.9643 21 13.9286 19.95 13.9286 18.6667V4.66667H1.07143V18.6667ZM15 1.16667H11.25L10.1786 0H4.82143L3.75 1.16667H0V3.5H15V1.16667Z"
        fill="#404454"
      />
    </svg>
  </IconWrapper>
);

IconTrash.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconTrash.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconTrash;
