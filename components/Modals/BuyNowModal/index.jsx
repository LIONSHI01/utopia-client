import React, { useState } from 'react';

import { useCreatePayment } from '../../../utils/reactQueryHooks/useCreatePayment';
import {
  ModalContainer,
  ButtonsGroup,
  ContentsContainer,
} from './index.styles';

import { Button, BUTTON_TYPES, Overlay, MetaMaskButton } from '../../index';

const BuyNowModal = ({ showup, setShowup, post }) => {
  const {
    chainId,
    isMetamaskInstalled,
    isConnectedWallet,
    walletAddress,
    connectWalletHandler,
    sendTransactionRequest,
  } = useCreatePayment(post?.price);

  const onConfirmHandler = () => {
    sendTransactionRequest();
  };

  return (
    <>
      <ModalContainer showup={showup}>
        <ContentsContainer>
          <p>Chain id: {chainId}</p>
          <p>Connected {walletAddress}</p>
          <MetaMaskButton onClick={connectWalletHandler} />
        </ContentsContainer>
        <ButtonsGroup>
          <Button
            height="4rem"
            width="10rem"
            fonsSize="1.6rem"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={() => setShowup(false)}
          >
            Cancel
          </Button>
          <Button
            disable={!isConnectedWallet}
            height="4rem"
            width="10rem"
            fonsSize="1.6rem"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onConfirmHandler}
          >
            Confirm
          </Button>
        </ButtonsGroup>
      </ModalContainer>
      <Overlay showUp={showup} setShowUp={setShowup} />
    </>
  );
};

export default BuyNowModal;
