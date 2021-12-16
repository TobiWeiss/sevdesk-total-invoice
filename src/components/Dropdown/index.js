import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as BootstrapDropdown, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import StyledDropdown from './StyledDropdown';
import IconChevron from '../Icons/IconChevron';
import TextSmall from '../TextSmall';
import theme from '../../theme';
import StyledDropdownLabel from './StyledDropdownLabel';

const Dropdown = function ({
  values,
  label,
  selected,
  setSelected,
  placeholder,
  defaultValue,
}) {
  useEffect(() => {
    if (!selected && defaultValue) {
      setSelected({ value: defaultValue });
    }
  }, [defaultValue]);

  const handleValue = () => {
    if (defaultValue && !selected) {
      return defaultValue;
    }

    if (!defaultValue && !selected) {
      return ''; // empty string necessary to fallback to placeholder
    }

    return selected;
  };

  return (
    <StyledDropdown>
      <BootstrapDropdown.Toggle>
        <StyledDropdownLabel>
          <TextSmall font={theme.fonts.serif} color={theme.colors.gray}>
            {label}
          </TextSmall>
        </StyledDropdownLabel>
        <Form.Control
          value={handleValue()}
          placeholder={placeholder}
          autoComplete="no"
          readOnly
        />
        <div className="chevron-icon">
          <IconChevron />
        </div>
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu aria-expanded="false">
        {values.map((value, index) => (
          <BootstrapDropdown.Item
            eventKey={index}
            onClick={() => {
              setSelected(value);
            }}
            active={value.key === selected}
            key={uuidv4()}
          >
            {value.value}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </StyledDropdown>
  );
};

Dropdown.defaultProps = {
  values: [],
  label: '',
  selected: '',
  setSelected: () => {},
  placeholder: '',
  defaultValue: undefined,
};

Dropdown.propTypes = {
  values: PropTypes.array,
  label: PropTypes.string,
  selected: PropTypes.string,
  setSelected: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Dropdown;
