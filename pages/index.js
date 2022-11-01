import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { setCurrentUser } from '../store/user/user.action';

import { DisplayList } from '../components';
import { getAllPosts } from '../utils/postRequest';

const ContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
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
    isLoading,
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

  return (
    <ContentContainer>
      <DisplayList posts={posts} />
    </ContentContainer>
  );
};

export default Home;
