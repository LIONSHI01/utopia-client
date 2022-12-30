import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '../store/user/user.action';
import { setEthPrice } from '../store/post/post.action';
import { useGetEthHook } from '../utils/customHooks/ethQueryHook';
import { useGetUserHook } from '../utils/customHooks/fetchUserHook';
import { useGetAllPostsHook } from '../utils/customHooks/postQueryHook';
import { DisplayList } from '../components';
import { device } from '../styles/devices';

const ContentContainer = styled.div`
  width: 100%;
`;

const FrameworkContainer = styled.div`
  max-width: var(--container);

  margin: 5rem auto;
  padding: 0 1.4rem;

  @media ${device.desktop} {
    margin: 5rem auto;
  }
  @media ${device.tablet_portrait} {
    margin: 2rem auto;
  }
`;

const Home = () => {
  // CONFIGURATION
  const dispatch = useDispatch();
  const { data } = useSession();
  const ethQuote = useGetEthHook();
  const { user } = useGetUserHook({ userId: data?.profile?._id });
  const { isLoading: isLoadingPosts, posts } = useGetAllPostsHook();

  // API CALLS

  useEffect(() => {
    dispatch(setCurrentUser(user));
    dispatch(setEthPrice(ethQuote));
  }, [dispatch, user, ethQuote]);

  return (
    <ContentContainer>
      <Head>
        <title>Home | Utopia</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <FrameworkContainer>
        <DisplayList posts={posts} isLoading={isLoadingPosts} />
      </FrameworkContainer>
    </ContentContainer>
  );
};

export default Home;
