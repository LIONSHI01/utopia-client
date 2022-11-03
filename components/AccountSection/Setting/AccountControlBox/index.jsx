import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { Button, BUTTON_TYPES, Overlay, FormInputComp } from '../../../index';

import {
  AccountControlWrapper,
  ModalContainer,
  ModalMessageContainer,
  ButtonsGroup,
} from './index.styles';

const AccountControlBox = ({ user }) => {
  // console.log(user);

  // STATE MANAGEMENT
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');

  // HANDLERS
  const onSubmitHandler = () => {
    console.log(password);
  };

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onCloseHandler = () => {
    setPassword('');
    setShowModal(false);
  };
  // API CALLS

  return (
    <AccountControlWrapper>
      <h3 className="heading">Close your account</h3>
      <div className="contents">
        <p> What happens when you close your account?</p>
        <ul>
          <li>Your account will be inactive, until you reopen it.</li>
          <li>Your profile will no longer appear anywhere on Etsy.</li>
          <li>Your account will be inactive, until you reopen it.</li>
          <li>We&#39;ll close any non-delivery cases you opened.</li>
          <li>
            Your account settings will remain intact, and no one will be able to
            use your username.
          </li>
        </ul>
        <p>
          You can reopen your account anytime. Just sign back in to Etsy or
          contact Utopia support for help.
        </p>
      </div>
      <Button
        size="x"
        buttonType={BUTTON_TYPES.outlineGrey}
        onClick={() => setShowModal(true)}
      >
        Close account
      </Button>
      <ModalContainer showup={showModal}>
        <ModalMessageContainer>
          <h3 className="heading">
            Are you sure you want to close your account?
          </h3>
          <FormInputComp
            label="Enter Your Password"
            type="password"
            value={password}
            onChange={onChangeHandler}
          />
        </ModalMessageContainer>
        <ButtonsGroup>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={onCloseHandler}
          >
            Cancel
          </Button>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onSubmitHandler}
          >
            Confirm
          </Button>
        </ButtonsGroup>
      </ModalContainer>
      <Overlay showUp={showModal} setShowUp={onCloseHandler} />
    </AccountControlWrapper>
  );
};

export default AccountControlBox;
