import React from 'react';
import {
  ModalContainer,
  MessageContainer,
  ButtonsGroup,
  SpinnerContainer,
} from './index.styles';

import {
  Button,
  BUTTON_TYPES,
  Overlay,
  Spinner,
  MasterModalFramework,
} from '../index';

const WaitingModal = ({
  title,
  message,
  url,
  showup,
  setShowup,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <MasterModalFramework showup={showup} setShowup={() => {}}>
        <ModalContainer>
          <SpinnerContainer>
            <Spinner message="Transaction may take a few minutes, please wait until transaction complete." />
          </SpinnerContainer>
        </ModalContainer>
        {/* <Overlay showUp={showup} setShowUp={() => {}} /> */}
      </MasterModalFramework>
    );
  }

  return (
    <MasterModalFramework showup={showup} setShowup={setShowup}>
      <ModalContainer>
        <MessageContainer>
          <h3>{title}</h3>
          <p>{message}</p>
          <a target="_blank" rel="noreferrer" href={url}>
            View transaction on block explorer
          </a>
        </MessageContainer>
        <ButtonsGroup>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={() => setShowup(false)}
          >
            Confirm
          </Button>
        </ButtonsGroup>
      </ModalContainer>
      {/* <Overlay showUp={showup} setShowUp={setShowup} /> */}
    </MasterModalFramework>
  );
};

export default WaitingModal;
