import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: text-bottom;
  margin: ${(props) => props.margin};
  ${(props) => props.direction
    && `transition-duration: 0.5s; transform: ${(props.direction === 'down'
      && 'rotated(0deg);')
      || (props.direction === 'left' && 'rotate(90deg);')
      || (props.direction === 'up' && 'rotate(180deg);')
      || (props.direction === 'right' && 'rotate(270deg);')}`}

  ${(props) => props.size === 'sm'
    && css`
      height: 12px;
      width: 12px;
    `};
  ${(props) => props.size === 'md'
    && css`
      height: 17px;
      width: 17px;
    `};
  ${(props) => props.size === 'lg'
    && css`
      height: 24px;
      width: 24px;
    `};
`;

IconWrapper.propTypes = {
  margin: PropTypes.string,
  size: PropTypes.string,
  direction: PropTypes.string,
};

export default IconWrapper;
