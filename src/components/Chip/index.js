import React from 'react';
import PropTypes from 'prop-types';
import StyledChip from './StyledChip';
import theme from '../../theme';
import IconClose from '../Icons/IconClose';

const Chip = ({
  onSelect, text, isRemovable, handleRemove, color,
}) => {
  const handleClick = () => {
    onSelect(text);
  };
  const onRemove = (event) => {
    event.stopPropagation();
    handleRemove(text);
  };

  return (
    <StyledChip color={color}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handleClick} className="chip-content-container">
        {text}
        {isRemovable && (
          <span tabIndex={0} role="button" onClick={onRemove} onKeyDown={onRemove}>
            <IconClose />
          </span>
        )}
      </div>
    </StyledChip>
  );
};

Chip.defaultProps = {
  color: theme.colors.darkGray,
  onSelect: () => {},
  isRemovable: false,
  handleRemove: () => {},
};

Chip.propTypes = {
  color: PropTypes.oneOf(Object.values(theme.colors)),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onSelect: PropTypes.func,
  isRemovable: PropTypes.bool,
  handleRemove: PropTypes.func,
};

export default Chip;
