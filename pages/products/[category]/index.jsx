import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getCategoryPosts } from '../../../utils/postRequest';
import { DisplayList } from '../../../components';

import { CategoryPageContainer } from '../../../pages_styles/category.styles';

const CategoryPage = () => {
  // CONFIGURATION
  const { query } = useRouter();
  const { category } = query;

  // STATE MANAGEMENT
  const [posts, setPosts] = useState([]);

  const onSuccess = (data) => {
    setPosts(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  const {
    isLoading,
    data: postsData,
    isError,
    error,
  } = useQuery(['categoryPosts', category], () => getCategoryPosts(category), {
    onSuccess,
    onError,
    enabled: !!category,
  });

  // useEffect(() => {
  //   const getCategoryPostsHandler = async () => {
  //     const data = await getCategoryPosts(category);
  //     setPosts(data);
  //   };
  //   getCategoryPostsHandler();
  // }, [category]);

  return (
    <CategoryPageContainer>
      {posts && <DisplayList posts={posts} />}
    </CategoryPageContainer>
  );
};

export default CategoryPage;
