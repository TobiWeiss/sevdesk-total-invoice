import React, { useState, useEffect } from 'react';
import ModalService from '../../services/modalService';

const ModalRoot = () => {
  const [modal, setModal] = useState({});

  useEffect(() => {
    ModalService.on('open', ({ component, props }) => {
      setModal({
        component,
        props,
        close: () => {
          setModal({});
        },
      });
    });
    ModalService.on('close', () => {
      setModal({});
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;
  return (
    <div>
      {ModalComponent &&
        React.cloneElement(ModalComponent, {
          ...modal.props,
          closeModal: () => setModal({}),
        })}
    </div>
  );
};

export default ModalRoot;
