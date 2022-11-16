import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useMutation } from 'react-query';

import { useConnectWallet } from '../../utils/reactQueryHooks/useConnectWallet';
import { signupRequest } from '../../utils/authRequest';
import { Button, BUTTON_TYPES, Overlay, ForgotPasswordModal } from '../index';
import { FormContainer, MetaMaskFormBox, EmailFormBox } from './index.styles';
import MetaMaskIcon from '../../assets/image/meta_mask.png';

const INITIAL_FORM_FIELD = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const AuthForm = ({ showAuthForm, setShowAuthForm }) => {
  // CONFIGURATION
  const {
    isConnectedWallet,
    isMetamaskInstalled,
    walletAddress,
    connectWalletHandler,
  } = useConnectWallet();

  // STATE MANAGEMENT
  const [isSignup, setIsSignup] = useState(true);
  const [formField, setFormField] = useState(INITIAL_FORM_FIELD);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const { username, email, password, passwordConfirm } = formField;

  // HANDLERS

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password !== passwordConfirm)
        return toast.error('Password not macth, please confirm again!');

      mutateSignup({ username, email, password });
    } else {
      mutateSignin();
    }
  };

  const onWalletSigninHandler = async () => {
    setIsSigningIn(true);

    signIn('walletAddress', { walletAddress, redirect: false }).then(
      ({ ok, error }) => {
        if (ok) {
          setShowAuthForm(false);
          setIsSigningIn(false);
          return toast.success('Welcome back!');
        }
        setIsSigningIn(false);
        return toast.error(error);
      }
    );
  };

  const onResetHandler = () => {
    setShowAuthForm(false);
    setIsForgotPassword(true);
  };

  const { isLoading: isSignningup, mutate: mutateSignup } = useMutation(
    signupRequest,
    {
      onSuccess: () => {
        setFormField(INITIAL_FORM_FIELD);
        setShowAuthForm(false);
        toast.success('Signup successfully, you may login now!');
      },
      onError: (err) => {
        toast.error(`${err.response.data.data.message}`);
      },
    }
  );

  const { isLoading: isEmailLogging, mutate: mutateSignin } = useMutation(
    () =>
      signIn('credentials', {
        email,
        password,
        redirect: false,
      }),
    {
      onSuccess: () => {
        setFormField(INITIAL_FORM_FIELD);
        setShowAuthForm(false);
        toast.success('Welcome back!');
      },
      onError: (err) => {
        console.log(err);
        toast.error(`${err.response.data.data.message}`);
      },
    }
  );

  const onClickconnectWalletHandler = () => {
    connectWalletHandler();
  };

  return (
    <>
      <FormContainer showUp={showAuthForm}>
        <div className="heading">
          <h2>{isSignup ? 'Sign Up' : 'Sign In'} to Utopia</h2>
        </div>

        <EmailFormBox onSubmit={onSubmitHandler}>
          {isSignup && (
            <input
              name="username"
              value={username}
              type="text"
              placeholder="Username"
              onChange={onChangeHandler}
              className="input-field"
              required
            />
          )}
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
            className="input-field"
            required
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
            className="input-field"
            required
          />
          {isSignup && (
            <input
              name="passwordConfirm"
              value={passwordConfirm}
              type="password"
              placeholder="Confirm Password"
              onChange={onChangeHandler}
              className="input-field"
              required
            />
          )}
          <Button
            fonsSize="1.8rem"
            height="4rem"
            width="100%"
            type="submit"
            isLoading={isSignningup || isEmailLogging}
          >
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>

          {!isSignup && (
            <>
              <div className="forget">
                <button onClick={onResetHandler}>Forgot Password?</button>
              </div>
              <span className="or_text">or</span>
            </>
          )}
        </EmailFormBox>

        {!isSignup && (
          <MetaMaskFormBox>
            {!walletAddress ? (
              <button
                className="web3_login_btn"
                disabled={!isMetamaskInstalled}
              >
                <div
                  className="meta_mask_icon"
                  onClick={onClickconnectWalletHandler}
                >
                  <Image
                    src={MetaMaskIcon}
                    alt="meta_mask"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </button>
            ) : (
              <div className="walletAddress">
                <span>
                  Connected&nbsp;
                  {`${walletAddress?.substring(
                    0,
                    6
                  )}...${walletAddress?.substring(38)}`}
                </span>
              </div>
            )}
            <Button
              disable={isConnectedWallet ? false : true}
              isLoading={isSigningIn}
              width="100%"
              height="4rem"
              fonsSize="1.8rem"
              buttonType={BUTTON_TYPES.web3}
              onClick={onWalletSigninHandler}
            >
              {isConnectedWallet
                ? 'Sign in with wallet'
                : 'Please connect wallet'}
            </Button>
          </MetaMaskFormBox>
        )}
        <div className="switch-box">
          <p>{!isSignup ? 'Not a member yet?' : 'Already a member?'}</p>
          <Button
            size="x"
            fonsSize="1.8rem"
            onClick={() => setIsSignup((prev) => !prev)}
            buttonType={BUTTON_TYPES.raw}
          >
            {isSignup ? 'Sign in' : 'Sign up'}
          </Button>
        </div>
      </FormContainer>
      <ForgotPasswordModal
        showup={isForgotPassword}
        setShowup={setIsForgotPassword}
        setShowAuthForm={setShowAuthForm}
      />
      <Overlay showUp={showAuthForm} setShowUp={setShowAuthForm} />
    </>
  );
};

export default AuthForm;
