import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const Text = styled.span`
  font-family: ${(props) => props.font};
  font-size: 15px;
  font-weight: ${(props) => (props.isBold ? 700 : 400)};
  color: ${(props) => props.color};
  display: ${(props) => (props.isInline ? 'inline-block' : 'block')};
  text-align: ${(props) => props.textAlign};
`;

Text.defaultProps = {
  font: theme.fonts.sansSerif,
  isBold: false,
  color: theme.colors.darkGray,
  isInline: true,
  textAlign: 'center',
};

Text.propTypes = {
  font: PropTypes.oneOf(Object.values(theme.fonts)),
  isBold: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(theme.colors)),
  isInline: PropTypes.bool,
  textAlign: PropTypes.string,
};

export default Text;
