import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useMutation } from 'react-query';

import { FaExchangeAlt } from '../ReactIcons';
import { useConnectWallet } from '../../utils/customHooks/useConnectWallet';
import { signupRequest } from '../../utils/authRequest';
import {
  Button,
  BUTTON_TYPES,
  Overlay,
  ForgotPasswordModal,
  FormInputComp,
} from '../index';
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
    switchAccountsHandler,
    personalSignHandler,
  } = useConnectWallet();

  // STATE MANAGEMENT
  const [isSignup, setIsSignup] = useState(true);
  const [formField, setFormField] = useState(INITIAL_FORM_FIELD);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isEmailSigningIn, setIsEmailSigningIn] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const { username, email, password, passwordConfirm } = formField;
  const [showPassword, setShowPassword] = useState(false);

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
      setIsEmailSigningIn(true);
      signIn('credentials', { email, password, redirect: false }).then(
        ({ ok, error }) => {
          if (ok) {
            setShowAuthForm(false);
            setIsEmailSigningIn(false);
            return toast.success('Welcome back!');
          }
          console.log(error);
          setIsEmailSigningIn(false);
          return toast.error(error);
        }
      );
    }
  };

  const onWalletSigninHandler = async () => {
    setIsSigningIn(true);

    // Request for wallet authentication(confirm wallet owner)
    const res = await personalSignHandler();

    if (res.code === 4001) {
      setIsSigningIn(false);
      return toast.warn('Authorization failed, please try again.');
    }

    // Sign in after authentication
    await signIn('walletAddress', { walletAddress, redirect: false }).then(
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
    setIsSigningIn(false);
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
        toast.error(`${err.response.data.message}`);
      },
    }
  );

  const onClickconnectWalletHandler = () => connectWalletHandler();
  return (
    <>
      <FormContainer showUp={showAuthForm}>
        <div className="heading">
          <h2>{isSignup ? 'Sign Up' : 'Sign In'} to Utopia</h2>
        </div>

        <EmailFormBox onSubmit={onSubmitHandler}>
          {isSignup && (
            <FormInputComp
              name="username"
              value={username}
              type="text"
              placeholder="Username"
              onChange={onChangeHandler}
              className="input-field"
              required
              autoComplete="off"
            />
          )}
          <FormInputComp
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
            className="input-field"
            required
            autoComplete="off"
          />

          <FormInputComp
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChangeHandler}
            className="input-field"
            required
            autoComplete="off"
            isPasswordBtn={true}
          />

          {isSignup && (
            <FormInputComp
              name="passwordConfirm"
              value={passwordConfirm}
              // type="password"
              placeholder="Confirm Password"
              onChange={onChangeHandler}
              className="input-field"
              required
              autoComplete="off"
              isPasswordBtn={true}
            />
          )}
          <Button
            fonsSize="1.8rem"
            height="4rem"
            width="100%"
            type="submit"
            isLoading={isSignningup || isEmailSigningIn}
          >
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>

          {!isSignup && (
            <>
              <div className="forget">
                <button type="button" onClick={onResetHandler}>
                  Forgot Password?
                </button>
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
              <div className="wallet_connected_box">
                <div className="walletAddress">
                  <span>
                    Connected&nbsp;
                    {`${walletAddress?.substring(
                      0,
                      6
                    )}...${walletAddress?.substring(38)}`}
                  </span>
                </div>
                <button
                  className="wallet_switch_btn"
                  type="button"
                  onClick={switchAccountsHandler}
                >
                  <FaExchangeAlt size={20} />
                </button>
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
