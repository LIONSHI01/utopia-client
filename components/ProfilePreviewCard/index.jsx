import React, { useState, useEffect } from 'react';
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
import { getUser } from '../../utils/accountRequest';

const ProfilePreviewCard = ({ postByUser }) => {
  const [postOwner, setPostOwner] = useState(null);
  const previewItems = postOwner?.posts
    ?.map((post) => ({
      image: post?.images[0],
      path: `/products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`,
    }))
    ?.slice(0, 3);

  console.log(previewItems);
  // console.log(postOwner);
  useEffect(() => {
    const getPostOwnerData = async () => {
      const data = await getUser(postByUser?._id);
      setPostOwner(data);
    };
    getPostOwnerData();
  }, [postByUser]);

  return (
    <CardContaienr>
      <InfoContainer>
        <UserIcon user={postByUser} />
        <div className="user-details">
          <p className="name">{postOwner?.name}</p>
          <div className="social-links">
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <AiFillInstagram size={15} color="var(--black-light-2)" />
            </IconButton>
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <AiOutlineTwitter size={15} color="var(--black-light-2)" />
            </IconButton>
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <GrFacebookOption size={15} color="var(--black-light-2)" />
            </IconButton>
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
          Message
        </Button>
        <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
          Follow
        </Button>
      </ButtonsContainer>
    </CardContaienr>
  );
};

export default ProfilePreviewCard;
