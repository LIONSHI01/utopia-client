import { useMutation } from 'react-query';
import { updateCollection } from '../../collectionRequest';
import { toast } from 'react-toastify';

export const useUpdateCollection = ({ refetchUser }) => {
  const { isLoading, mutate } = useMutation(updateCollection, {
    onSuccess: () => {
      refetchUser();
      toast.success('Collection updated.');
    },
    onError: (err) => {
      console.log(err);
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

  return { isLoading, mutate };
};
