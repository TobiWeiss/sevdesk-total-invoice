import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconAdd = ({
  margin, color, size, direction,
}) => (
  <IconWrapper margin={margin} size={size} direction={direction}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
      <g id="Ebene_2" data-name="Ebene 2">
        <g id="Ebene_1-2" data-name="Ebene 1">
          <path
            d="M12.65,5.75h-2.3v4.6H5.75v2.3h4.6v4.6h2.3v-4.6h4.6v-2.3h-4.6ZM11.5,0A11.5,11.5,0,1,0,23,11.5,11.5,11.5,0,0,0,11.5,0Zm0,20.7a9.2,9.2,0,1,1,9.2-9.2A9.21,9.21,0,0,1,11.5,20.7Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  </IconWrapper>
);

IconAdd.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
  direction: 'down',
};

IconAdd.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

export default IconAdd;
