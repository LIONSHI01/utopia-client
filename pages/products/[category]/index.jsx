import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getCategoryPosts } from '../../../utils/postRequest';
import { DisplayList, NavigationMap } from '../../../components';

import {
  CategoryPageContainer,
  FrameWorkContainer,
} from '../../../pages_styles/category.styles';

const CategoryPage = () => {
  // CONFIGURATION
  const { query } = useRouter();
  const { category } = query;

  // STATE MANAGEMENT
  const [posts, setPosts] = useState([]);

  const { isLoading: isLoadingPosts } = useQuery(
    ['categoryPosts', category],
    () => getCategoryPosts(category),
    {
      onSuccess: (data) => setPosts(data),
      onError: (error) => console.log(error),
      enabled: !!category,
    }
  );

  return (
    <CategoryPageContainer>
      <Head>
        <title>{category} | Utopia</title>
      </Head>
      <FrameWorkContainer>
        <NavigationMap categoryValue={category} />
        <div className="list_container">
          {posts && <DisplayList posts={posts} isLoading={isLoadingPosts} />}
        </div>
      </FrameWorkContainer>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
