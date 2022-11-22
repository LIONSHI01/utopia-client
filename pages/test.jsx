import React, { useState } from 'react';
import { Button, ProductCardSkeleton } from '../components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const TestPageWrapper = styled.div`
  .item-img {
    height: 140px;
    width: 140px;
  }
`;

const test = () => {
  return (
    <TestPageWrapper>
      {/* <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
        <div className="item-img">
          <Skeleton width={140} height={140} />
        </div>
      </SkeletonTheme> */}

      <ProductCardSkeleton />

      {/* <Button
        size="x"
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      >
        Button
      </Button> */}
    </TestPageWrapper>
  );
};

export default test;
