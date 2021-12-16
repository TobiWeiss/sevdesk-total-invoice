import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const TextSmall = styled.span`
  font-family: ${props => props.font};
  font-size: 12px;
  font-weight: ${props => (props.isBold ? 700 : 400)};
  color: ${props => props.color};
  display: ${props => (props.isInline ? 'inline-block' : 'block')};
`;

TextSmall.defaultProps = {
  font: theme.fonts.sansSerif,
  isBold: false,
  color: theme.colors.darkGray,
  isInline: true,
};

TextSmall.propTypes = {
  font: PropTypes.oneOf(Object.values(theme.fonts)),
  isBold: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  isInline: PropTypes.bool,
};

export default TextSmall;
