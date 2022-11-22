import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import {
  GrFacebookOption,
  AiOutlineTwitter,
  AiFillInstagram,
} from '../ReactIcons';
import {
  Button,
  BUTTON_TYPES,
  UserIcon,
  ProfilePreviewCardSkeleton,
  AuthForm,
} from '../index';
import { useFollowHook } from '../../utils/customHooks/useFollowHook';
import { useGetUserHook } from '../../utils/customHooks/fetchUserHook';

import { productLinkGenerator } from '../../utils/productLinkGenerator';
import {
  CardContaienr,
  InfoContainer,
  ProfileContainer,
  ImagesContainer,
  ButtonsContainer,
} from './index.styles';

const ProfilePreviewCard = ({ postByUser }) => {
  // CONFIGURATION
  const { data } = useSession();
  const { user, refetch: refetchUser } = useGetUserHook({
    userId: data?.profile?.id,
  });
  const { user: postOwner, isLoading: isLoadingPostOwner } = useGetUserHook({
    userId: postByUser?.id,
  });

  const { isFollowing, isLoadingFollow, mutateFollowerHandler } = useFollowHook(
    {
      currentUserProfile: user,
      postCreatorId: postByUser?.id,
      refetchUser,
    }
  );

  const previewItems = postOwner?.posts
    ?.map((post) => ({
      image: post?.images[0],
      path: productLinkGenerator(post),
    }))
    ?.slice(0, 3);

  // STATES
  const [showAuthForm, setShowAuthForm] = useState(false);

  // HANDLERS
  const onFollowHandler = () => {
    if (!data) return setShowAuthForm(true);
    mutateFollowerHandler();
  };

  if (isLoadingPostOwner) return <ProfilePreviewCardSkeleton />;

  return (
    <>
      <CardContaienr>
        <InfoContainer>
          <UserIcon user={postByUser} />
          <div className="user-details">
            <Link href={`/users/${postByUser?.id}/listings`}>
              <a className="name">{postOwner?.name}</a>
            </Link>
            <div className="social-links">
              {postByUser?.instagram && (
                <a
                  href={`${postByUser?.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={15} className="social_icon" />
                </a>
              )}
              {postByUser?.twitter && (
                <a
                  href={`${postByUser?.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter size={15} className="social_icon" />
                </a>
              )}
              {postByUser?.facebook && (
                <a
                  href={`${postByUser?.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrFacebookOption size={15} className="social_icon" />
                </a>
              )}
            </div>
          </div>
        </InfoContainer>
        <ProfileContainer>
          <div className="section">
            <span className="numbers">{postOwner?.posts?.length || 0}</span>
            posts
          </div>
          <div className="section">
            <span className="numbers">{postOwner?.followers?.length || 0}</span>
            followers
          </div>
          <div className="section">
            <span className="numbers">
              {postOwner?.followings?.length || 0}
            </span>
            following
          </div>
        </ProfileContainer>
        <ImagesContainer>
          {previewItems?.map((item, i) => (
            <Link key={i} href={item.path}>
              <a
                className="image-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item?.image}
                  alt="Preview"
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              </a>
            </Link>
          ))}
        </ImagesContainer>
        <ButtonsContainer>
          <Button
            isLoading={isLoadingFollow}
            height="100%"
            width="100%"
            fonsSize="1.4rem"
            buttonType={
              isFollowing ? BUTTON_TYPES.base : BUTTON_TYPES.outlineGrey
            }
            onClick={onFollowHandler}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
          <Button
            height="100%"
            width="100%"
            fonsSize="1.4rem"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={() => Router.push(`/users/${postByUser?.id}/collections`)}
          >
            View more
          </Button>
        </ButtonsContainer>
      </CardContaienr>
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default ProfilePreviewCard;
