import React from 'react';
import PropTypes from 'prop-types';
import TextSmall from '../Text/TextSmall';
import Text from '../Text';
import H2 from '../Headlines/H2';
import Button from '../Button';
import StyledModal from './StyledModal';
import theme from '../../theme';
import IconClose from '../Icons/IconClose';
import StyledCloseIconWrapper from './StyledCloseIconWrapper';
import SvgButton from '../SvgButton';

function Modal({
  onConfirm,
  onConfirmText,
  onCancel,
  onCancelText,
  title,
  text,
  closeModal,
  children,
  disableConfirmation,
}) {
  return (
    <>
      <StyledModal isOpen onBackgroundClick={closeModal}>
        <StyledCloseIconWrapper>
          <SvgButton onClick={closeModal}>
            <IconClose onClick={closeModal} />
          </SvgButton>
        </StyledCloseIconWrapper>

        <div className="pt-4">
          <H2 isBold margin="0 0 0 0">{title}</H2>
          <TextSmall color={theme.colors.gray}>{text}</TextSmall>
          {children}
        </div>
        <div className="d-flex w-100 mt-3">
          <Button type="outlined" size="sm" onClick={onCancel} className="mx-2">
            <Text color={theme.colors.gray}>{onCancelText}</Text>
          </Button>
          <Button
            size="sm"
            onClick={onConfirm}
            className="mx-2"
            disabled={disableConfirmation}
            type={disableConfirmation ? 'disabled' : 'primary'}
          >
            <Text size="sm" color={theme.colors.white} isBold>
              {onConfirmText}
            </Text>
          </Button>
        </div>
      </StyledModal>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  closeModal: PropTypes.func,
  disableConfirmation: PropTypes.bool,
  onCancel: PropTypes.func,
  onCancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onConfirmText: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default Modal;
