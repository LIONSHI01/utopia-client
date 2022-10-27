import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { setCurrentUser } from '../store/user/user.action';

import { DisplayList } from '../components';
import { getAllPosts } from '../utils/postRequest';

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

  // console.log(postsData);
  // useEffect(() => {
  //   const getAllPostHandler = async () => {
  //     const res = await getAllPosts();
  //     setPosts(res);
  //   };
  //   getAllPostHandler();
  // }, []);

  useEffect(() => {
    dispatch(setCurrentUser(data?.profile));
  }, [dispatch, data]);

  return (
    <>
      <DisplayList posts={posts} />
    </>
  );
};

export default Home;
