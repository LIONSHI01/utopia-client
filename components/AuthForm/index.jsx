import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

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
  const router = useRouter();

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
        await signupRequest({ username, email, password });
      }
    } else {
      signIn('credentials', {
        email,
        password,
        redirect: false,
      }).then((res) => {
        if (res.ok) {
          setShowAuthForm(false);
          setFormField(INITIAL_FORM_FIELD);
          toast.success('Welcome back!');
          router.replace('/');
        }
        toast.warn(res.error);
        console.log(res);
      });
    }
  };

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
            />
          )}
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
      <Overlay showUp={showAuthForm} setShowUp={setShowAuthForm} />
    </>
  );
};

export default AuthForm;
