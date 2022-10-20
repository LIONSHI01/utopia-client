import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

import { signupRequest } from '../../utils/authRequest';

import { Button, BUTTON_TYPES, Overlay } from '../index';
import { FormContainer } from './index.styles';

const AuthForm = () => {
  const INITIAL_FORM_FIELD = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
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
      if (password === passwordConfirm) {
        const res = await signupRequest({ username, email, password });
        console.log(res);
      }
    } else {
      signIn('credentials', { email, password, redirect: '/' });
    }
  };

  return (
    <>
      <FormContainer>
        <div className="heading">
          <h2>{isSignup ? 'Sign Up' : 'Sign In'} to Utopia</h2>
        </div>
        <form className="form" onSubmit={onSubmitHandler}>
          <input
            name="username"
            value={username}
            type="text"
            placeholder="Username"
            onChange={onChangeHandler}
            className="input-field"
          />
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
            className="input-field"
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
            className="input-field"
          />
          {isSignup && (
            <input
              name="passwordConfirm"
              value={passwordConfirm}
              type="password"
              placeholder="Confirm Password"
              onChange={onChangeHandler}
              className="input-field"
            />
          )}
          <Button size="x" type="submit">
            {isSignup ? 'Sign Up' : 'Sign In'}
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
            onClick={() => setIsSignup((prev) => !prev)}
            buttonType={BUTTON_TYPES.raw}
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </FormContainer>
      <Overlay />
    </>
  );
};

export default AuthForm;
