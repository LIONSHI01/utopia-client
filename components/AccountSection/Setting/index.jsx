import React, { useState, useEffect } from 'react';

import ProfileBox from './ProfileBox';
import AuthenticationBox from './AuthenticationBox';
import AccountControlBox from './AccountControlBox';

import { SectionContainer, ContentsContainer } from './index.styles';

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
