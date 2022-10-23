import React from 'react';
import { useRouter } from 'next/router';

import { SubCategoryPageContainer } from '../../../../pages_styles/subCategory.styles';

const SubCategoryPage = () => {
  const { query } = useRouter();
  console.log(query);

  return <SubCategoryPageContainer>SubCategory</SubCategoryPageContainer>;
};

export default SubCategoryPage;
