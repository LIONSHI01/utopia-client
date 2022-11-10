import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from 'react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';

import {
  AiFillStar,
  BsThreeDotsVertical,
  BsBookmarkStarFill,
  BsThreeDots,
} from '../../ReactIcons';
import { updateUserProfile } from '../../../utils/apiData/userRequest';
import { newFollowingsCalculator } from '../../../utils/profileCalculator';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  IconButton,
  ICON_BUTTON_TYPES,
  AuthForm,
} from '../../index';
import EditDropdownMenu from '../EditDropdownMenu';
import { BoxWrapper } from './index.styles';

const SellerInfoBox = ({
  user,
  seller,
  isAuthenticated,
  post,
  isFollowing,
}) => {
  // CONFIGURATION
  const ref = useRef();

  // STATE MANAGEMENT
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showEditDropdown && !ref.current.contains(e.target)) {
        setShowEditDropdown(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showEditDropdown]);

  // API CALLS

  const { isLoading: isLoadingFollow, mutate: mutateFollowUser } = useMutation(
    updateUserProfile,
    {
      onSuccess: () => {
        toast.success(`You have updated following list.`);
        refetchUser();
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  // HANDLERS
  const onFollowHandler = () => {
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

          {isAuthenticated && (
            <div className="editing-btn" ref={ref}>
              <IconButton
                size="x"
                buttonType={ICON_BUTTON_TYPES.hoverBackground}
                onClick={() => setShowEditDropdown((prev) => !prev)}
              >
                <BsThreeDotsVertical size={22} />
              </IconButton>
              <EditDropdownMenu
                post={post}
                showup={showEditDropdown}
                setShowup={setShowEditDropdown}
              />
            </div>
          )}
        </div>
        <div className="lowerBox">
          <div className="sales">98 sales</div>
          <div className="rates">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <AiFillStar key={i} size={15} />
            ))}
          </div>
        </div>
      </BoxWrapper>
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default SellerInfoBox;
