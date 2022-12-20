import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../store/user/user.selector';
import { ModalContainer, MessageContainer, ButtonsGroup } from './index.styles';

import {
  Button,
  BUTTON_TYPES,
  Overlay,
  FormInputComp,
  MasterModalFramework,
} from '../../index';

const FaucetModal = ({ showup, setShowup, onSubmitClaimHandler }) => {
  const user = useSelector(selectUser);
  const [address, setAddress] = useState('');

  const onChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  return (
    <MasterModalFramework showup={showup} setShowup={setShowup}>
      <ModalContainer>
        <MessageContainer>
          <h3>Claim Test GoerliETH</h3>
          <p>
            Please provide your ethereum address below, it may take a minute to
            process the transaction, please wait patiently.
          </p>
          <FormInputComp
            placeholder="0x8e89a6a4263ea8dAcdA46572fF918727491FE338"
            value={address}
            onChange={onChangeHandler}
          />
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
            onClick={() =>
              onSubmitClaimHandler({
                userId: user?.id,
                walletAddress: address,
              })
            }
          >
            Confirm
          </Button>
        </ButtonsGroup>
      </ModalContainer>
    </MasterModalFramework>
  );
};

export default FaucetModal;
