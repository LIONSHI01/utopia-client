import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import {
  SubCategoryPageContainer,
  FrameWorkContainer,
} from '../../../../pages_styles/subCategory.styles';
import { getSubCategoryPosts } from '../../../../utils/postRequest';
import { DisplayList, NavigationMap } from '../../../../components';

const SubCategoryPage = () => {
  const [posts, setPosts] = useState([]);

  const { query } = useRouter();
  const { category, subCategory } = query;

  const { isLoading: isLoadingPosts } = useQuery(
    ['subCateogry_posts', category, subCategory],
    () => getSubCategoryPosts({ category, subCategory }),
    {
      onSuccess: (data) => setPosts(data),
      onError: (error) => console.log(error),
      enabled: !!category && !!subCategory,
    }
  );

  return (
    <SubCategoryPageContainer>
      <Head>
        <title>Utopia - {subCategory}</title>
      </Head>
      <FrameWorkContainer>
        <NavigationMap
          categoryValue={category}
          subCategoryValue={subCategory}
        />
        <div className="list_container">
          <DisplayList posts={posts} isLoading={isLoadingPosts} />
        </div>
      </FrameWorkContainer>
    </SubCategoryPageContainer>
  );
};

export default SubCategoryPage;
