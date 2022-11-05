import React from 'react';

import { ReviewBoxContainer, ReviewsList } from './index.styles';
import { ReviewItem } from '../../index';

const ReviewBox = ({ reviews }) => {
  return (
    <ReviewBoxContainer>
      <h4 className="heading">{reviews?.length} reviews on this item</h4>
      <ReviewsList>
        {reviews?.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ReviewsList>
    </ReviewBoxContainer>
  );
};

export default ReviewBox;
