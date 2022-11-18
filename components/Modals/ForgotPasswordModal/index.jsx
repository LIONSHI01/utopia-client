import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { forgotPasswordRequest } from '../../../utils/apiData/userRequest';
import { FormInputComp, Button, BUTTON_TYPES, Overlay } from '../../index';
import { ModalContainer, MessageContainer, ButtonsGroup } from './index.styles';

const ForgotPasswordModal = ({ showup, setShowup, setShowAuthForm }) => {
  const [email, setEmail] = useState('');

  // API CALLS
  const { isLoading: isRequestingReset, mutate: mutateForgotPassword } =
    useMutation(forgotPasswordRequest, {
      onSuccess: () => {
        setEmail('');
        setShowup(false);
        toast.success(
          'Password reset link is sent to you email, please reset in 10 minutes.'
        );
      },
      onError: (err) => {
        toast.error(`${err.response.data.data.message}`);
      },
    });

  // HANDLERS
  const onSubmitHandler = () => {
    if (!email) {
      return toast.warn('Please enter email.');
    }
    mutateForgotPassword(email);
  };

  const onCancelHandler = () => {
    setShowup(false);
    setShowAuthForm(true);
  };

  return (
    <>
      <ModalContainer showup={showup}>
        <MessageContainer>
          <h3>Reset Password</h3>
          <p>
            Please enter your email address and we&#39;ll send you a link to
            reset your password.
          </p>
          <FormInputComp
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autocomplete="off"
          />
        </MessageContainer>
        <ButtonsGroup>
          <Button
            isLoading={isRequestingReset}
            height="4rem"
            width="100%"
            fonsSize="1.8rem"
            buttonType={BUTTON_TYPES.base}
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </ButtonsGroup>
        <div className="goback_btn">
          <Button
            height="4.5rem"
            width="100%"
            fonsSize="1.8rem"
            buttonType={BUTTON_TYPES.raw}
            onClick={onCancelHandler}
          >
            Back to Sign In
          </Button>
        </div>
      </ModalContainer>
      <Overlay showUp={showup} setShowUp={setShowup} />
    </>
  );
};

export default ForgotPasswordModal;
