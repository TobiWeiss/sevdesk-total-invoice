import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import theme from '../../theme';

const StyledDropdown = styled(Dropdown)`
  .dropdown-toggle {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 8px 0;
    display: block;
    text-align: left;

    .form-control {
      background-color: transparent;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid ${theme.colors.primary};
      font-family: ${theme.fonts.sansSerif};
      font-size: 18px;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        box-shadow: none !important;
        caret-color: transparent !important;
      }

      &:focus-visible {
        text-shadow: none !important;
      }
    }

    :after {
      display: none;
    }

    .chevron-icon {
      position: absolute;
      right: 5px;
      bottom: 10px;
    }

    &,
    &:hover,
    &:focus,
    &:active,
    &.show {
      background-color: transparent !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }

  .dropdown-menu {
    position: fixed !important;
    overflow-y: auto;
    max-height: 300px;
    .dropdown-item {
      &:active,
      &.active,
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
  }
`;

export default StyledDropdown;
