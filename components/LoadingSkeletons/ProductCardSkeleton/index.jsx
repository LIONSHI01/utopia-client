import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  CardContainer,
  HeaderContaienr,
  ImageContainer,
  ContentContainer,
} from './index.styles';

const ProductCardSkeleton = () => {
  return (
    <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
      <CardContainer>
        <HeaderContaienr>
          <div className="user-info">
            <Skeleton height="3rem" width="3rem" circle={true} />

            <div className="user_details">
              <Skeleton height="1.2rem" width={80} />
            </div>
          </div>
        </HeaderContaienr>

        <ImageContainer>
          <Skeleton width="100%" height="18rem" />
        </ImageContainer>

        <ContentContainer>
          <div className="details">
            <Skeleton height="1.6rem" />
            <div className="price">
              <Skeleton circle={true} height="1.8rem" width="1.8rem" />
              <Skeleton height="1.68rem" width="9rem" />
            </div>
            <Skeleton height="1.68rem" width="5rem" />
          </div>
          <Skeleton count={1} height="2.5rem" width="100%" />
        </ContentContainer>
      </CardContainer>
    </SkeletonTheme>
  );
};

export default ProductCardSkeleton;
