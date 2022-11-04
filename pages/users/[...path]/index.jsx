import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getUser } from '../../../utils/apiData/userRequest';
import {
  Spinner,
  MenuSidebar,
  CollectionMasterSection,
  OffersMasterSection,
  OrdersMasterSection,
  ListingsMasterSection,
  SettingsMasterSection,
} from '../../../components/index';

import {
  PageContainer,
  LoadingPageContainer,
} from '../../../pages_styles/ProfilePage.styles';

const AccountPage = () => {
  const { data } = useSession();

  // CONFIGURATION
  const router = useRouter();
  const { query } = router;

  // STATE MANAGEMENT isAuthenticated={isAuthenticated}
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displaySection, setDisplaySection] = useState(
    query?.path?.[1] || 'collections'
  );

  // API FETCH
  const { isLoading: isLoadingUser, refetch: refetchUser } = useQuery(
    ['currentUser', query?.path?.[0]],
    () => getUser(query?.path?.[0]),
    {
      onSuccess: (data) => {
        setUser(data);
      },
      onError: (err) => {
        console.log(err);
      },
      enabled: !!query?.path?.[0],
    }
  );

  // HANDLERS

  useEffect(() => {
    setIsAuthenticated(data?.profile?._id === user?._id);
    setDisplaySection(query?.path?.[1]);
  }, [user, data, query]);

  if (isLoadingUser) {
    return (
      <LoadingPageContainer>
        <Spinner message="Loading page..." />
      </LoadingPageContainer>
    );
  }

  return (
    <PageContainer>
      <MenuSidebar
        user={user}
        setDisplaySection={setDisplaySection}
        isAuthenticated={isAuthenticated}
        displaySection={displaySection}
      />
      {displaySection === 'collections' && (
        <CollectionMasterSection
          user={user}
          refetchUser={refetchUser}
          isAuthenticated={isAuthenticated}
        />
      )}
      {displaySection === 'listings' && (
        <ListingsMasterSection
          user={user}
          refetchUser={refetchUser}
          isAuthenticated={isAuthenticated}
        />
      )}
      {isAuthenticated && (
        <>
          {displaySection === 'offers' && (
            <OffersMasterSection user={user} refetchUser={refetchUser} />
          )}
          {displaySection === 'orders' && (
            <OrdersMasterSection user={user} refetchUser={refetchUser} />
          )}
          {displaySection === 'settings' && (
            <SettingsMasterSection user={user} refetchUser={refetchUser} />
          )}
        </>
      )}
    </PageContainer>
  );
};

export default AccountPage;
