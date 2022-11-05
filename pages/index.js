import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

import { setCurrentUser } from '../store/user/user.action';
import { setEthPrice } from '../store/post/post.action';
import { useGetEthHooks } from '../utils/reactQueryHooks/ethQueryHooks';

import { DisplayList, Spinner } from '../components';
import { getAllPosts } from '../utils/postRequest';
import { getUser } from '../utils/apiData/userRequest';

const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;
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
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);
  // const [ethQuote, setEthQuote] = useState(0);
  const ethQuote = useGetEthHooks();
  // API CALLS

  const { isLoading: isLoadingPosts } = useQuery(['posts'], getAllPosts, {
    onSuccess: (data) => setPosts(data),
    onError: (err) =>
      console.log('encounter an error during fetching ==> ', err),
  });

  const { isLoading: isLoadingUser } = useQuery(
    ['user', data?.profile?._id],
    () => getUser(data?.profile?._id),
    {
      onSuccess: (data) => setUser(data),
      onError: (err) =>
        console.log('encounter an error during fetching ==> ', err),
      enabled: !!data?.profile?._id,
    }
  );

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
