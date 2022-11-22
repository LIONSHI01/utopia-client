import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import {
  SubCategoryPageContainer,
  FrameWorkContainer,
  LoadingPageContainer,
} from '../../../../pages_styles/subCategory.styles';
import { getSubCategoryPosts } from '../../../../utils/postRequest';
import { DisplayList, NavigationMap, Spinner } from '../../../../components';

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

  // if (isLoadingPosts)
  //   return (
  //     <LoadingPageContainer>
  //       <Spinner message="Loading items for you ..." />
  //     </LoadingPageContainer>
  //   );

  return (
    <SubCategoryPageContainer>
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
