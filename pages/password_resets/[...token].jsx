import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { FormInputComp, Button, BUTTON_TYPES } from '../../components/index';

import {
  PageContainer,
  FrameworkContainer,
  FormContainer,
  ImageContainer,
} from '../../pages_styles/password_resets.styles';
import { resetPasswordRequest } from '../../utils/apiData/userRequest';
import BackgroundImage from '../../assets/image/password_reset_image.png';

const INITIAL_FORM_FIELDS = {
  password: '',
  confirmPassword: '',
};

const ResetPasswordPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const {
    query: { token },
  } = router || {};

  // STATES
  const [formField, setFormField] = useState(INITIAL_FORM_FIELDS);
  const { password, confirmPassword } = formField;

  // HANDLERS
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = () => {
    if (password !== confirmPassword)
      return toast.warn('Password does not match.');

    mutateResetPassword({ token: token?.[0], password });
  };

  const { isLoading, mutate: mutateResetPassword } = useMutation(
    resetPasswordRequest,
    {
      onSuccess: () => {
        setFormField(INITIAL_FORM_FIELDS);
        toast.success('Password updated, you may login now.');
      },
      onError: (err) => {
        toast.error(err.response.data.data.message);
      },
    }
  );

  return (
    <PageContainer>
      <Head>
        <title>Utopia - Reset password</title>
      </Head>
      <FrameworkContainer>
        <ImageContainer>
          <Image
            src={BackgroundImage}
            alt="bg"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </ImageContainer>
        <FormContainer>
          <h3 className="heading">Reset your password</h3>
          <div className="input_fields">
            <FormInputComp
              label="Password"
              name="password"
              value={password}
              placeholder="New password"
              onChange={onChangeHandler}
              isPasswordBtn={true}
            />
            <FormInputComp
              label="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={onChangeHandler}
              isPasswordBtn={true}
            />
          </div>
          <Button
            isLoading={isLoading}
            height="4.5rem"
            width="100%"
            fonsSize="1.8rem"
            buttonType={BUTTON_TYPES.base}
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </FormContainer>
      </FrameworkContainer>
    </PageContainer>
  );
};

export default ResetPasswordPage;
