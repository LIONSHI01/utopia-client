import React from 'react';

import CategoryBarItem from './CategoryBarItem';
import { BarWrapper } from './index.styles';

import { categories } from '../../assets/constants';

const CategoryBar = () => {
  return (
    <BarWrapper>
      {categories?.map((category) => (
        <CategoryBarItem key={category.category} item={category} />
      ))}
    </BarWrapper>
  );
};

export default CategoryBar;
