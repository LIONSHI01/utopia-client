import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getCategoryPosts } from '../../../utils/postRequest';
import { DisplayList, NavigationMap, Spinner } from '../../../components';

import {
  CategoryPageContainer,
  FrameWorkContainer,
  LoadingPageContainer,
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

  if (isLoadingPosts)
    return (
      <LoadingPageContainer>
        <Spinner message="Loading items for you ..." />
      </LoadingPageContainer>
    );

  return (
    <CategoryPageContainer>
      <FrameWorkContainer>
        <NavigationMap categoryValue={category} />
        <div className="list_container">
          {posts && <DisplayList posts={posts} />}
        </div>
      </FrameWorkContainer>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
