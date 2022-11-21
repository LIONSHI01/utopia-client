import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

import { BsBookmarkStarFill } from '../../ReactIcons';
import { updateUserProfile } from '../../../utils/apiData/userRequest';
import { newFollowingsCalculator } from '../../../utils/profileCalculator';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  AuthForm,
  RatingItem,
} from '../../index';

import { BoxWrapper } from './index.styles';

const SellerInfoBox = ({
  user,
  seller,
  post,
  isFollowing,
  refetchUser,
  refetchSeller,
}) => {
  // CONFIGURATION

  const sales = seller?.offers?.filter(
    (offer) => offer.status === 'completed'
  )?.length;
  const { data } = useSession();

  // STATE MANAGEMENT
  const [showAuthForm, setShowAuthForm] = useState(false);

  // API CALLS

  const { isLoading: isLoadingFollow, mutate: mutateFollowUser } = useMutation(
    updateUserProfile,
    {
      onSuccess: () => {
        toast.success(`You have updated following list.`);
        refetchUser();
        refetchSeller();
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  // HANDLERS
  const onFollowHandler = () => {
    if (!data) return setShowAuthForm(true);

    const newFollowingsArr = newFollowingsCalculator(
      user?.followings,
      post?.postedBy?.id
    );

    mutateFollowUser({ userId: user?._id, followings: newFollowingsArr });
  };

  return (
    <>
      <BoxWrapper>
        <div className="upperBox">
          <Link href={`/users/${seller?._id}/collections`}>
            <a className="seller-info">
              <UserIcon user={seller} />
              <span>{seller?.name}</span>
            </a>
          </Link>

          <Button
            isLoading={isLoadingFollow}
            size="x"
            buttonType={
              isFollowing ? BUTTON_TYPES.base : BUTTON_TYPES.outlineGrey
            }
            onClick={onFollowHandler}
          >
            {seller?.followers.length || 0} <BsBookmarkStarFill size={15} />
          </Button>
        </div>
        <div className="lowerBox">
          <div className="sales">{sales} sales</div>
          <RatingItem rating={4} starSize={15} />
        </div>
      </BoxWrapper>
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default SellerInfoBox;
