import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getUser } from '../../../utils/accountRequest';

import { MenuSidebar } from '../../../components';

const ProfileSettingsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT

  return (
    <div>
      <MenuSidebar user={user} />
    </div>
  );
};

export default ProfileSettingsPage;
