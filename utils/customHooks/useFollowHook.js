import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { validateFollowingUser } from '../profileCalculator';
import { updateUserProfile } from '../apiData/userRequest';
import { newFollowingsCalculator } from '../profileCalculator';

export const useFollowHook = ({
  currentUserProfile,
  postCreatorId,
  refetchUser,
  refetchSeller,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Check if PostCreator is follower by current user
    const ifFollowing = validateFollowingUser(
      currentUserProfile?.followings,
      postCreatorId
    );
    setIsFollowing(ifFollowing);
  }, [currentUserProfile, postCreatorId]);

  const { isLoading: isLoadingFollow, mutate: mutateFollowUser } = useMutation(
    updateUserProfile,
    {
      onSuccess: () => {
        toast.success(`You have updated following list.`);
        refetchUser && refetchUser();
        refetchSeller && refetchSeller();
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const mutateFollowerHandler = () => {
    const newFollowingsArr = newFollowingsCalculator(
      currentUserProfile?.followings,
      postCreatorId
    );

    mutateFollowUser({
      userId: currentUserProfile?._id,
      followings: newFollowingsArr,
    });
  };

  return { isFollowing, isLoadingFollow, mutateFollowerHandler };
};
