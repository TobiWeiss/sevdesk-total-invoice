import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StyledToolTipButton from './StyledToolTipButton';

const ToolTip = ({ children, placement, tooltipContent }) => {
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      <>{tooltipContent}</>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement={placement} overlay={renderTooltip}>
      <StyledToolTipButton>{children}</StyledToolTipButton>
    </OverlayTrigger>
  );
};

ToolTip.defaultProps = {
  placement: 'right',
  tooltipContent: '',
};

ToolTip.propTypes = {
  placement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  tooltipContent: PropTypes.string,
  children: PropTypes.element,
};

export default ToolTip;
