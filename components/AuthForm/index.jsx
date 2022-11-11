import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { signupRequest } from '../../utils/authRequest';
import { Button, BUTTON_TYPES, Overlay } from '../index';
import { FormContainer } from './index.styles';

const INITIAL_FORM_FIELD = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const AuthForm = ({ showAuthForm, setShowAuthForm }) => {
  // CONFIGURATION

  // STATE MANAGEMENT
  const [isSignup, setIsSignup] = useState(true);
  const [formField, setFormField] = useState(INITIAL_FORM_FIELD);
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

  const { isLoading: isSignningin, mutate: mutateSignin } = useMutation(
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
        toast.error(`${err.response.data.data.message}`);
      },
    }
  );

  return (
    <>
      <FormContainer showUp={showAuthForm}>
        <div className="heading">
          <h2>{isSignup ? 'Sign Up' : 'Sign In'} to Utopia</h2>
        </div>
        <form className="form" onSubmit={onSubmitHandler}>
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
            isLoading={isSignningup || isSignningin}
          >
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>
          {!isSignup && (
            <div className="forget">
              <button>Forgot Password?</button>
            </div>
          )}
        </form>
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
