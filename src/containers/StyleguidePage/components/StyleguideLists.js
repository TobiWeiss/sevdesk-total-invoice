import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Chip from '../../../components/Chip';
import theme from '../../../theme';

const StyleguideLists = function () {
  const mappingExample = [1, 2, 3, 4];

  return (
    <ul>
      {mappingExample.map((item) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  );
};

export default StyleguideLists;
