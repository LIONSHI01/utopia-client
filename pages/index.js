import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

import { setCurrentUser } from '../store/user/user.action';
import { getEthereumQuotes } from '../utils/connectCMC';

import { DisplayList, Spinner } from '../components';
import { getAllPosts } from '../utils/postRequest';

const ContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const LoadingPageContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSession();
  const [posts, setPosts] = useState(null);

  // useQuery fetching data
  const onSuccess = (data) => {
    setPosts(data);
  };

  const onError = (error) => {
    console.log('encounter an error during fetching ==> ', error);
  };

  const {
    isLoading: isLoadingPosts,
    data: postsData,
    isError,
    error,
  } = useQuery(['posts'], getAllPosts, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    dispatch(setCurrentUser(data?.profile));
  }, [dispatch, data]);

  useEffect(() => {
    const fetchEthereumPrice = async () => {
      const res = await getEthereumQuotes();
      console.log(res);
    };

    fetchEthereumPrice();
  }, []);

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
