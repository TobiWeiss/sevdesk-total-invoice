import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const StyledAccordionHeader = styled.div`
  > div {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    display: flex;
    justify-content: space-between;
    background: ${theme.colors.lightGrey};
    padding: 10px 20px;
    flex-grow: 1;

    ${(props) =>
      props.active &&
      css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      `}
    ${(props) =>
      !props.active &&
      css`
        background: ${theme.colors.lightGrey};
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
      `}
  }
`;

StyledAccordionHeader.propTypes = {
  active: PropTypes.bool,
};

export default StyledAccordionHeader;
