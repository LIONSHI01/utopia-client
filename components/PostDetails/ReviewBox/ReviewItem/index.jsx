import React from 'react';
import Link from 'next/link';

import { ReviewItemContainer, PostedByInfo } from './index.styles';
import { UserIcon, RatingItem } from '../../../index';
import { timePeriod } from '../../../../utils/timeCalculator';
import { useGetUserHook } from '../../../../utils/reactQueryHooks/fetchUserHook';

const ReviewItem = ({ review }) => {
  // CONFIGURATION
  const { reviewRating, content, postedBy, createdAt } = review || {};

  // Fetch Data
  const { user: postCreator } = useGetUserHook({ userId: postedBy });

  return (
    <ReviewItemContainer>
      <div className="rating">
        <RatingItem size={20} rating={reviewRating} />
      </div>
      <div className="contents">{content}</div>
      <PostedByInfo>
        <UserIcon user={postCreator} />
        <Link href={`/users/${postedBy}/collections`}>
          <a className="username">{postCreator?.name}</a>
        </Link>
        <span className="publish_date">{timePeriod(createdAt)}</span>
      </PostedByInfo>
    </ReviewItemContainer>
  );
};

export default ReviewItem;
