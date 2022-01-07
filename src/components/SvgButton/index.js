import React from 'react';
import PropTypes from 'prop-types';
import StyledSvgButton from './StyledSvgButton';

const SvgButton = ({ children, onClick, className }) => {
  const onKeyDown = event => {
    event.preventDefault();
  };

  return (
    <StyledSvgButton
      onKeyDown={onKeyDown}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledSvgButton>
  );
};

SvgButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SvgButton;
