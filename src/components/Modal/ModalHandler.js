import { isEmpty } from 'lodash';
import React from 'react';
import theme from '../../theme';
import IconCheck from '../Icons/IconCheck';
import Text from '../Text';
import Modal from './index';

export const getCreateInvoiceModal = (onConfirm, onCancel, amount) => (
  <Modal
    title="Bist du sicher?"
    text={`Mutter, möchtest du aus den ${amount} gewählten Lieferscheinen wirklich eine Rechnung erstellen?`}
    onCancelText="Abbrechen"
    onConfirmText="Ja, Rechnung erstellen"
    onConfirm={onConfirm}
    onCancel={onCancel}
  />
);

