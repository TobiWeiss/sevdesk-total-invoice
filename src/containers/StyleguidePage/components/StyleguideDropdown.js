import React from 'react';
import Dropdown from '../../../components/Dropdown';

const StyleguideDropdown = function () {
  return (
    <div>
      <Dropdown
        label="Dropdown-Selection"
        values={[
          { key: '1', value: 'Option 1' },
          { key: '2', value: 'Option 2' },
        ]}
      />
    </div>
  );
};

export default StyleguideDropdown;
