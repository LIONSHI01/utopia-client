import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import {
  reviewOnPostRequest,
  updateReviewRequest,
} from '../../../../utils/apiData/reviewRequest';
import { CommentBoxContainer, CommentWrapper } from './index.styles';

import { Button, BUTTON_TYPES, FormInputComp, RatingBar } from '../../../index';

const OrderCommentBox = ({ user, order, refetchUser, setShowup, isUpdate }) => {
  const [comment, setComment] = useState(
    order?.buyer_review?.[0]?.content || ''
  );
  const [reviewRating, setReviewRating] = useState(
    order?.buyer_review?.[0]?.reviewRating || 0
  );

  useEffect(() => {
    setComment(order?.buyer_review?.[0]?.content || '');
    setReviewRating(order?.buyer_review?.[0]?.reviewRating);
  }, [order]);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = () => {
    if (isUpdate) {
      return mutateUpdateReview({
        reviewId: order?.buyer_review?.[0]?.id,
        content: comment,
        reviewRating,
      });
    }
    return mutateCreateReview({
      postedBy: user?.id,
      post: order?.post?.id,
      order: order?.id,
      content: comment,
      reviewRating,
    });
  };

  const onCancelHandler = () => {
    setShowup(false);
    setComment(order?.buyer_review?.[0]?.content || '');
    setReviewRating(order?.buyer_review?.[0]?.reviewRating || 0);
  };

  // API CALLS
  // Create Review
  const { isLoading, mutate: mutateCreateReview } = useMutation(
    reviewOnPostRequest,
    {
      onSuccess: () => {
        refetchUser();
        toast.success('Review published.');
        setComment('');
        setReviewRating(0);
      },
      onError: (err) => {
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  // Update Review
  const { mutate: mutateUpdateReview } = useMutation(updateReviewRequest, {
    onSuccess: () => {
      refetchUser();
      setShowup(false);
      toast.success('Review updated.');
    },
    onError: (err) => {
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

  return (
    <CommentBoxContainer>
      <RatingBar score={reviewRating} setScore={setReviewRating} />
      <CommentWrapper>
        <FormInputComp
          placeHolder="Please review on this item..."
          inputType="textarea"
          value={comment}
          onChange={onChangeHandler}
        />
        <div className="buttons-group">
          <Button
            height="3.5rem"
            width="8rem"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={onCancelHandler}
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            height="3.5rem"
            width="8rem"
            buttonType={BUTTON_TYPES.base}
            onClick={onSubmitHandler}
          >
            Publish
          </Button>
        </div>
      </CommentWrapper>
    </CommentBoxContainer>
  );
};

export default OrderCommentBox;
