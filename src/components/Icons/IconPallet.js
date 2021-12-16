import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './IconWrapper';
import theme from '../../theme';

const IconPallet = props => (
  <IconWrapper {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 252.73 156.6"
    >
      <g id="Ebene_2" data-name="Ebene 2">
        <g id="Ebene_1-2" data-name="Ebene 1">
          <polygon
            className="cls-1"
            points="0 99.69 0 156.6 32.31 156.6 32.31 122.21 109.67 122.21 109.67 156.6 142.63 156.6 142.63 122.17 220.59 122.17 220.59 156.6 252.73 156.6 252.73 99.69 0 99.69"
          />
          <polygon
            className="cls-1"
            points="0 88.86 42.4 88.86 63.19 0 31.59 0 0 88.86"
          />
          <polygon
            className="cls-1"
            points="50.46 88.86 94.88 88.86 102.68 0 68.9 0 50.46 88.86"
          />
          <polygon
            className="cls-1"
            points="108.65 0 141.39 0 146.06 88.86 102.68 88.86 108.65 0"
          />
          <polygon
            className="cls-1"
            points="147.88 0 181.92 0 200.1 88.86 153.6 88.86 147.88 0"
          />
          <polygon
            className="cls-1"
            points="207.9 88.86 252.73 88.86 221.67 0 188.41 0 207.9 88.86"
          />
        </g>
      </g>
    </svg>
  </IconWrapper>
);

IconPallet.defaultProps = {
  margin: '0 0 0 0',
  color: theme.colors.darkGray,
  size: 'sm',
};

IconPallet.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconPallet;
