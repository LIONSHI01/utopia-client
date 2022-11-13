import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useMutation } from 'react-query';

import { ImArrowLeft2 } from '../ReactIcons';
import { useConnectWallet } from '../../utils/reactQueryHooks/useConnectWallet';
import { signupRequest } from '../../utils/authRequest';
import {
  Button,
  BUTTON_TYPES,
  Overlay,
  IconButton,
  ICON_BUTTON_TYPES,
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
  const { walletAddress, connectWalletHandler } = useConnectWallet();

  // STATE MANAGEMENT
  const [isSignup, setIsSignup] = useState(true);
  const [formField, setFormField] = useState(INITIAL_FORM_FIELD);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [hideEmailForm, setHideEmailForm] = useState(false);
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
      // setIsSigningIn(true);
      mutateSignin();
      // signIn('credentials', { email, password, redirect: false }).then(
      //   ({ ok, error }) => {
      //     if (ok) {
      //       setIsSigningIn(false);
      //       setFormField(INITIAL_FORM_FIELD);
      //       setShowAuthForm(false);
      //       return toast.success('Welcome back!');
      //     }
      //     setIsSigningIn(false);
      //     return toast.error('Invalid email or password, please try again.');
      //   }
      // );
    }
  };

  const onWalletSigninHandler = async () => {
    setIsSigningIn(true);
    // METHOD 1
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
    setHideEmailForm(true);
    connectWalletHandler();
  };

  return (
    <>
      <FormContainer showUp={showAuthForm}>
        <div className="heading">
          <h2>{isSignup ? 'Sign Up' : 'Sign In'} to Utopia</h2>
        </div>

        <EmailFormBox onSubmit={onSubmitHandler} showup={hideEmailForm}>
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
                <button>Forgot Password?</button>
              </div>
              <span className="or_text">or</span>
            </>
          )}
        </EmailFormBox>

        {!isSignup && (
          <MetaMaskFormBox>
            <button className="web3_login_btn">
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
            {hideEmailForm && (
              <div className="goback_btn">
                <IconButton
                  size="x"
                  buttonType={ICON_BUTTON_TYPES.hoverBackground}
                  onClick={() => setHideEmailForm(false)}
                >
                  <ImArrowLeft2 size={20} />
                </IconButton>
              </div>
            )}
            {walletAddress && hideEmailForm ? (
              <div className="selectedBox">
                <div className="address_display">
                  <span>Selected address :</span>
                  <p className="walletAddress">{walletAddress}</p>
                </div>

                <Button
                  isLoading={isSigningIn}
                  width="100%"
                  height="4rem"
                  buttonType={BUTTON_TYPES.base}
                  onClick={onWalletSigninHandler}
                >
                  Sign In
                </Button>
              </div>
            ) : (
              <p>Sign in with MetaMask Wallet</p>
            )}
          </MetaMaskFormBox>
        )}
        <div className="switch-box">
          <p>{!isSignup ? 'Not a member yet?' : 'Already a member?'}</p>
          <Button
            size="x"
            onClick={() => setIsSignup((prev) => !prev)}
            buttonType={BUTTON_TYPES.raw}
          >
            {isSignup ? 'Sign in' : 'Sign up'}
          </Button>
        </div>
      </FormContainer>
      <Overlay showUp={showAuthForm} setShowUp={setShowAuthForm} />
    </>
  );
};

export default AuthForm;
