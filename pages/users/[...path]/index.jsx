import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useGetUserHook } from '../../../utils/customHooks/fetchUserHook';
import { useGetEthHook } from '../../../utils/customHooks/ethQueryHook';
import { setEthPrice } from '../../../store/post/post.action';

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
  const dispatch = useDispatch();
  const { data } = useSession();

  // CONFIGURATION
  const router = useRouter();
  const { query } = router;

  // STATE MANAGEMENT isAuthenticated={isAuthenticated}
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displaySection, setDisplaySection] = useState(
    query?.path?.[1] || 'collections'
  );
  const ethQuote = useGetEthHook();

  useEffect(() => {
    dispatch(setEthPrice(ethQuote));
  }, [dispatch, ethQuote]);

  // API FETCH

  const {
    user,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useGetUserHook({
    userId: query?.path?.[0],
  });

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
      <Head>
        <title>Utopia - Dashboard</title>
      </Head>
      <MenuSidebar
        refetchUser={refetchUser}
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
