import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { SubCategoryPageContainer } from '../../../../pages_styles/subCategory.styles';
import { getSubCategoryPosts } from '../../../../utils/postRequest';
import { DisplayList } from '../../../../components';

const SubCategoryPage = () => {
  const [posts, setPosts] = useState([]);

  const { query } = useRouter();
  const { category, subCategory } = query;

  const onSuccess = (data) => {
    setPosts(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  const { isLoading, isError, data } = useQuery(
    ['subCateogry_posts', category, subCategory],
    () => getSubCategoryPosts(category, subCategory),
    {
      onSuccess,
      onError,
      enabled: !!category && !!subCategory,
    }
  );

  // useEffect(() => {
  //   const getSubCategoryPostsHandler = async () => {
  //     const data = await getSubCategoryPosts(category, subCategory);
  //     setPosts(data);
  //   };
  //   getSubCategoryPostsHandler();
  // }, [category, subCategory]);

  return (
    <SubCategoryPageContainer>
      <DisplayList posts={posts} />
    </SubCategoryPageContainer>
  );
};

export default SubCategoryPage;
