import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { SubCategoryPageContainer } from '../../../../pages_styles/subCategory.styles';
import { getSubCategoryPosts } from '../../../../utils/postRequest';
import { DisplayList } from '../../../../components';

const SubCategoryPage = () => {
  const [posts, setPosts] = useState([]);

  const { query } = useRouter();
  const { category, subCategory } = query;

  useEffect(() => {
    const getSubCategoryPostsHandler = async () => {
      const data = await getSubCategoryPosts(category, subCategory);
      setPosts(data);
    };
    getSubCategoryPostsHandler();
  }, [category, subCategory]);

  return (
    <SubCategoryPageContainer>
      <DisplayList posts={posts} />
    </SubCategoryPageContainer>
  );
};

export default SubCategoryPage;
