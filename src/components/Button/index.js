// @flow

import * as React from 'react';
import StyledButton from './StyledButton';
import ContentWrapper from './ContentWrapper';

export type ButtonProps = {
  onClick: () => mixed,
  children: React.Node,
  type: ButtonType,
  size: ButtonSize,
  isBlock: boolean,
  hasRoundedCorners: boolean,
};

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonType =
  "primary" |
  "secondary" |
  "outlined";


const Button = ({
  onClick,
  children,
  type,
  size,
  isBlock,
  hasRoundedCorners,
}: ButtonProps): React.Node => {
  const Button = (
    <StyledButton {...{ onClick, size, type, isBlock, hasRoundedCorners }}>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledButton>
  );

  return Button;
};

Button.defaultProps = {
  onClick: () => {},
  type: "primary",
  size: "lg",
  isBlock: false,
  hasRoundedCorners: false,
};

export default Button;
