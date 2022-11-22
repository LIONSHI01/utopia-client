import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  CardContaienr,
  InfoContainer,
  ProfileContainer,
  ImagesContainer,
  ButtonsContainer,
} from './index.styles';

const ProfilePreviewCardSkeleton = () => {
  return (
    <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
      <CardContaienr>
        <InfoContainer>
          <Skeleton height="3rem" width="3rem" circle={true} />
          <div className="user-details">
            <Skeleton height="1.4rem" width="10rem" />
            <div className="social-links">
              <Skeleton height="1.2rem" width="1.2rem" circle={true} />
              <Skeleton height="1.2rem" width="1.2rem" circle={true} />
              <Skeleton height="1.2rem" width="1.2rem" circle={true} />
            </div>
          </div>
        </InfoContainer>

        <ProfileContainer>
          <div className="num_section">
            <Skeleton height="1.4rem" width="1.5rem" />
            <Skeleton height="1.4rem" width="5rem" />
          </div>
          <div className="num_section">
            <Skeleton height="1.4rem" width="1.5rem" />
            <Skeleton height="1.4rem" width="5rem" />
          </div>
          <div className="num_section">
            <Skeleton height="1.4rem" width="1.5rem" />
            <Skeleton height="1.4rem" width="5rem" />
          </div>
        </ProfileContainer>

        <ImagesContainer>
          <Skeleton height="9rem" width="9rem" />
          <Skeleton height="9rem" width="9rem" />
          <Skeleton height="9rem" width="9rem" />
        </ImagesContainer>

        <ButtonsContainer>
          <Skeleton count={1} height="2.5rem" width="11rem" />
          <Skeleton count={1} height="2.5rem" width="11rem" />
        </ButtonsContainer>
      </CardContaienr>
    </SkeletonTheme>
  );
};

export default ProfilePreviewCardSkeleton;
