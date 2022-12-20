import React from 'react';
import { ModalContainer, MessageContainer, ButtonsGroup } from './index.styles';

import { Button, BUTTON_TYPES, MasterModalFramework } from '../index';

const AlertModal = ({
  title,
  message,
  showup,
  setShowup,
  onConfirmHandler,
}) => {
  return (
    <MasterModalFramework showup={showup} setShowup={setShowup}>
      <ModalContainer>
        <MessageContainer>
          <h3>{title}</h3>
          <p>{message}</p>
        </MessageContainer>
        <ButtonsGroup>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={() => setShowup(false)}
          >
            Back
          </Button>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onConfirmHandler}
          >
            Confirm
          </Button>
        </ButtonsGroup>
      </ModalContainer>
    </MasterModalFramework>
  );
};

export default AlertModal;
