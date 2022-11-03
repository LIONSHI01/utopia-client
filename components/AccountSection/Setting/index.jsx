import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import validator from 'validator';

import ProfileBox from './ProfileBox';
import AuthenticationBox from './AuthenticationBox';
import AccountControlBox from './AccountControlBox';

import { FormInputComp, Button, BUTTON_TYPES } from '../../index';

import {
  SectionContainer,
  ContentsContainer,
  AccountControlWrapper,
} from './index.styles';

const SettingsMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT

  // HANDLERS

  // API CALLS

  return (
    <SectionContainer>
      <ContentsContainer>
        <ProfileBox user={user} refetchUser={refetchUser} />
        <AuthenticationBox user={user} refetchUser={refetchUser} />
        <AccountControlBox user={user} />
      </ContentsContainer>
    </SectionContainer>
  );
};

export default SettingsMasterSection;
