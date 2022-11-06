import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '../store/user/user.action';
import { setEthPrice } from '../store/post/post.action';

import { useGetEthHook } from '../utils/reactQueryHooks/ethQueryHook';
import { useGetUserHook } from '../utils/reactQueryHooks/fetchUserHook';
import { useGetAllPostsHook } from '../utils/reactQueryHooks/postQueryHook';
import { DisplayList, Spinner } from '../components';

const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;
  padding: 2rem 1.4rem;
`;

const LoadingPageContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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

  if (isLoadingPosts) {
    return (
      <LoadingPageContainer>
        <Spinner message="Loading page..." />
      </LoadingPageContainer>
    );
  }

  return (
    <ContentContainer>
      <DisplayList posts={posts} />
    </ContentContainer>
  );
};

export default Home;
