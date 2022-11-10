import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const reviewOnPostRequest = async ({
  postedBy,
  post,
  order,
  content,
  reviewRating,
}) => {
  const res = await axios({
    url: `${baseURL}/reviews/`,
    method: 'POST',
    data: {
      postedBy,
      post,
      order,
      content,
      reviewRating,
    },
  });

  return res;
};

export const updateReviewRequest = async ({
  reviewId,
  content,
  reviewRating,
}) => {
  const res = await axios({
    url: `${baseURL}/reviews/${reviewId}`,
    method: 'PATCH',
    data: {
      content,
      reviewRating,
    },
  });

  return res;
};

export const deleteReviewRequest = async ({ userId, reviewId }) => {
  const res = await axios({
    url: `${baseURL}/reviews/${reviewId}`,
    method: 'DELETE',
    data: { userId },
  });

  return res;
};
