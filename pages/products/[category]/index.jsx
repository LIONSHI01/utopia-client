import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CategoryPageContainer } from '../../../pages_styles/category.styles';

const CategoryPage = () => {
  // CONFIGURATION
  const { query } = useRouter();
  const { category } = query;

  // STATE MANAGEMENT
  const [posts, setPosts] = useState(null);

  console.log(category);
  return <CategoryPageContainer>CategoryPage</CategoryPageContainer>;
};

export default CategoryPage;
