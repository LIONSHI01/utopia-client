import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { changePasswordRequest } from '../../../../utils/apiData/userRequest';
import { FormInputComp, Button, BUTTON_TYPES } from '../../../index';
import { AuthenticationWrapper } from './index.styles';

const INITIAL_FORM_FIELD = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
};

const AuthenticationBox = ({ user, refetchUser }) => {
  console.log(user);

  const isUpdating = false;
  // STATE MANAGEMENT
  const [formFields, setFormFields] = useState(INITIAL_FORM_FIELD);
  const { currentPassword, password, confirmPassword } = formFields;

  // HANDLERS
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = () => {
    if (password !== confirmPassword)
      return toast.error('Please confirm new password again.');

    mutateChangePassword({ userId: user._id, currentPassword, password });
  };

  const restoreHandler = () => {
    setFormFields(INITIAL_FORM_FIELD);
  };

  // API CALLS
  const { isLoading, mutate: mutateChangePassword } = useMutation(
    changePasswordRequest,
    {
      onSuccess: () => {
        setFormFields(INITIAL_FORM_FIELD);
        toast.success('Password updated.');
      },
      onError: (err) => {
        toast.error(`${err?.response.data.data.message}`);
      },
    }
  );

  return (
    <AuthenticationWrapper>
      <h3 className="heading">Manage passwords</h3>
      <FormInputComp
        label="Current password"
        fieldName="currentPassword"
        type="password"
        name="currentPassword"
        value={currentPassword}
        onChange={onChangeHandler}
      />
      <FormInputComp
        label="New password"
        fieldName="password"
        type="password"
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
      <FormInputComp
        label="Confirm password"
        fieldName="confirm_password"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onChangeHandler}
      />
      <div className="profile-buttons-group">
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineRed}
          onClick={onSubmitHandler}
        >
          {isLoading ? 'Updating' : 'Save'}
        </Button>
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineGrey}
          onClick={restoreHandler}
        >
          Cancel
        </Button>
      </div>
    </AuthenticationWrapper>
  );
};

export default AuthenticationBox;
