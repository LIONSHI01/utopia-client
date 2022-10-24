import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { getCategoryPosts } from '../../../utils/postRequest';
import { DisplayList } from '../../../components';

import { CategoryPageContainer } from '../../../pages_styles/category.styles';

const CategoryPage = () => {
  // CONFIGURATION
  const { query } = useRouter();
  const { category } = query;

  // STATE MANAGEMENT
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getCategoryPostsHandler = async () => {
      const data = await getCategoryPosts(category);
      setPosts(data);
      // console.log(res);
    };
    getCategoryPostsHandler();
  }, [category]);

  // console.log(posts);
  return (
    <CategoryPageContainer>
      {posts && <DisplayList posts={posts} />}
    </CategoryPageContainer>
  );
};

export default CategoryPage;
