import React, { useState } from 'react';

import Link from 'next/link';
import { useQuery } from 'react-query';
import Image from 'next/image';

import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

import {
  Button,
  BUTTON_TYPES,
  UserIcon,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../index';

import {
  CardContaienr,
  InfoContainer,
  ProfileContainer,
  ImagesContainer,
  ButtonsContainer,
} from './index.styles';
import { getUser } from '../../utils/apiData/userRequest';

const ProfilePreviewCard = ({ postByUser }) => {
  const [postOwner, setPostOwner] = useState(null);
  const previewItems = postOwner?.posts
    ?.map((post) => ({
      image: post?.images[0],
      path: `/products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`,
    }))
    ?.slice(0, 3);

  // API CALL
  const { isLoading: isLoadingPostByUser } = useQuery(
    ['postUser', postByUser],
    () => getUser(postByUser?._id),
    {
      onSuccess: (data) => {
        setPostOwner(data);
      },
      enabled: !!postByUser?._id,
    }
  );

  return (
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
          <span className="numbers">{postOwner?.followings?.length || 0}</span>
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
                objectFit="contain"
                objectPosition="center"
                layout="fill"
              />
            </a>
          </Link>
        ))}
      </ImagesContainer>
      <ButtonsContainer>
        <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
          Follow
        </Button>
        <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
          View more
        </Button>
      </ButtonsContainer>
    </CardContaienr>
  );
};

export default ProfilePreviewCard;
