import React from 'react';
import Chip from '../../../components/Chip';
import theme from '../../../theme';

const StyleguideChips = () => (
  <div>
    <Chip color={theme.colors.primary} text="Chip 1" />
    <Chip color={theme.colors.primary} text="Removable Chip" isRemovable />
  </div>
);

export default StyleguideChips;
