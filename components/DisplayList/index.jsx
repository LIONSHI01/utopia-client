import React, { useEffect } from 'react';

import { DisplayContainer } from './index.styles';
import { ProductCard } from '../index';

const DisplayList = ({ posts }) => {
  return (
    <DisplayContainer>
      {posts?.map((post) => (
        <ProductCard key={post._id} post={post} />
      ))}
    </DisplayContainer>
  );
};

export default DisplayList;
