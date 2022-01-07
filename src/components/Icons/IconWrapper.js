import styled, { css } from 'styled-components';
import type { ComponentType } from 'react';
import PropTypes from 'prop-types';


type IconWrapperProps = {
  margin: string,
  size: "sm" | "md" | "lg",
  direction: string,
}

const IconWrapper: ComponentType<IconWrapperProps> = styled.div`
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

export default IconWrapper;
