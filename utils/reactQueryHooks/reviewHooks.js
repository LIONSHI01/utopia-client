import { useMutation } from 'react-query';
import { deleteReviewRequest } from '../apiData/reviewRequest';
import { toast } from 'react-toastify';

export const useDeleteReview = ({ refetchUser }) => {
  const { isLoading, mutate } = useMutation(deleteReviewRequest, {
    onSuccess: () => {
      toast.success('Review deleted.');
      refetchUser();
    },
    onError: (err) => {
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

  return { isLoading, mutate };
};
