import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { inactivateUserRequest } from '../../../../utils/apiData/userRequest';

import { Button, BUTTON_TYPES, Overlay, FormInputComp } from '../../../index';

import {
  AccountControlWrapper,
  ModalContainer,
  ModalMessageContainer,
  ButtonsGroup,
} from './index.styles';

const AccountControlBox = ({ user }) => {
  // STATE MANAGEMENT
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');

  // HANDLERS
  const onSubmitHandler = () => {
    console.log({ userId: user._id, password });
    mutateInactivateUser({ userId: user._id, password });
  };

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onCloseHandler = () => {
    setPassword('');
    setShowModal(false);
  };
  // API CALLS

  const { isLoading, mutate: mutateInactivateUser } = useMutation(
    inactivateUserRequest,
    {
      onSuccess: () => {
        toast.success('You have inactivate you account.');
        onCloseHandler();
        signOut({ redirect: false });
        Router.push('/');
      },
      onError: (err) => {
        console.log('error from modal:', err);
        toast.error(`${err?.response.data.message}`);
      },
    }
  );

  return (
    <AccountControlWrapper>
      <div className="heading">
        <AiOutlineUserDelete size={25} />
        <h3>Close your account</h3>
      </div>
      <div className="contents">
        <p> What happens when you close your account?</p>
        <ul>
          <li>Your account will be inactive, until you reopen it.</li>
          <li>Your profile will no longer appear anywhere on Utopia.</li>
          <li>Your account will be inactive, until you reopen it.</li>
          <li>We&#39;ll close any non-delivery cases you opened.</li>
          <li>
            Your account settings will remain intact, and no one will be able to
            use your username.
          </li>
        </ul>
        <p className="reminder">
          You can reopen your account anytime. Just sign back in to Utopia or
          contact Utopia support for help.
        </p>
      </div>
      <Button
        width="15rem"
        height="4rem"
        buttonType={BUTTON_TYPES.outlineGrey}
        onClick={() => setShowModal(true)}
      >
        Close account
      </Button>
      <ModalContainer showup={showModal}>
        <ModalMessageContainer>
          <h3 className="modal_heading">
            Are you sure you want to close your account?
          </h3>
          <FormInputComp
            label="Enter Your Password"
            value={password}
            onChange={onChangeHandler}
            isPasswordBtn={true}
          />
        </ModalMessageContainer>
        <ButtonsGroup>
          <Button
            height="4rem"
            width="8rem"
            fonsSize="1.6rem"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={onCloseHandler}
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            height="4rem"
            width="14rem"
            fonsSize="1.6rem"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onSubmitHandler}
          >
            Close account
          </Button>
        </ButtonsGroup>
      </ModalContainer>
      <Overlay showUp={showModal} setShowUp={onCloseHandler} />
    </AccountControlWrapper>
  );
};

export default AccountControlBox;
