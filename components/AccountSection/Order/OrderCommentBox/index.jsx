import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { reviewOnPostRequest } from '../../../../utils/apiData/reviewRequest';
import { CommentBoxContainer, CommentWrapper } from './index.styles';

import { Button, BUTTON_TYPES, FormInputComp, RatingBar } from '../../../index';

const OrderCommentBox = ({ user, order, refetchUser }) => {
  const [comment, setComment] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  console.log('comment box', order);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const onSubmitHandler = () => {
    mutateReviewPost({
      postedBy: user?.id,
      post: order?.post?.id,
      order: order?.id,
      content: comment,
      reviewRating,
    });
  };

  const onCancelHandler = () => setComment('');

  // API CALLS
  const { isLoading, mutate: mutateReviewPost } = useMutation(
    reviewOnPostRequest,
    {
      onSuccess: () => {
        toast.success('Review published.');
        refetchUser();
        setComment('');
        setReviewRating(0);
      },
      onError: (err) => {
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  return (
    <CommentBoxContainer>
      <RatingBar setScore={setReviewRating} />
      <CommentWrapper>
        <FormInputComp
          placeHolder="Comment on this item..."
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
